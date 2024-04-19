import axios from 'axios';
import { GenericSA } from '../../common/service/generic.sa';
import {
  usersubscriptionFactory,
  UserSubscriptionFactory,
} from '../../constraint/factory/UserSubscription';
import { configs } from '../../data/constants/configs';
import { UserSubscriptionDO } from '../../data/do/UserSubscription';
// @ts-ignore
import { UserSubscriptionRequestDTO } from '../../data/dto/UserSubscription/request';
// @ts-ignore
import { UserSubscriptionResponseDTO } from '../../data/dto/UserSubscription/response';
import { formatAmountForStripe } from '../../utils/amountFormater';
import { usersubscriptionSM, UserSubscriptionSM } from '../metier/UserSubscription';
import Stripe from 'stripe';

const stripe = new Stripe(configs.stripeSK);

export class UserSubscriptionSA extends GenericSA<
  UserSubscriptionDO,
  UserSubscriptionRequestDTO,
  UserSubscriptionResponseDTO,
  UserSubscriptionSM,
  UserSubscriptionFactory
> {
  async getSubscriptionByUserSA(id: string, pageId: string) {
    try {
      let data = await usersubscriptionSA.findOneWithRelation({ queries: { userId: id, pageId } });
      return data;
    } catch (error) {
      await axios.post('https://fullstack-demo-123-default-rtdb.firebaseio.com/logs.json', {
        key: 'getSubscriptionByUserSA',
        message: error,
        stringifiedMess: JSON.stringify(error),
        date: new Date().toISOString(),
      });
      return Promise.reject(error);
    }
  }

  async paymentConfigSA() {
    try {
      const prices = await stripe.prices.list();

      return {
        publishableKey: configs.stripePK,
        prices: prices.data,
      };
    } catch (error) {
      await axios.post('https://fullstack-demo-123-default-rtdb.firebaseio.com/logs.json', {
        key: 'paymentConfigSA',
        message: error,
        stringifiedMess: JSON.stringify(error),
        date: new Date().toISOString(),
      });
      return Promise.reject(error);
    }
  }

  async createCustomerSA(body: any) {
    const { name, email, phone, paymentType } = body;
    try {
      const customer = await stripe.customers.create({
        name,
        email,
        phone,
        // payment_method: paymentType,
      });

      return {
        customer,
      };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async createPaymentIntentSA(body) {
    const { amount, paymentType } = body;

    const formateAmount = formatAmountForStripe(amount, configs.stripeCURRENCY);

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: formateAmount,
        currency: configs.stripeCURRENCY,
        payment_method_types: [paymentType],
      });

      return {
        paymentIntent: paymentIntent.client_secret,
        nextAction: paymentIntent.next_action,
        publishableKey: configs.stripePK,
      };
    } catch (error) {
      console.log('createPaymentIntentSA ==', { error });
      await axios.post('https://fullstack-demo-123-default-rtdb.firebaseio.com/logs.json', {
        key: 'createPaymentIntentSA',
        message: error,
        stringifiedMess: JSON.stringify(error),
        date: new Date().toISOString(),
      });
      return Promise.reject(error);
    }
  }

  async webhookSA() {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        '', // req.body,
        '', // req.headers['stripe-signature'],
        process.env.STRIPE_WEBHOOK_SECRET,
      );
    } catch (error) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return {
        status: 400,
        message: 'Webhook signature verification failed.',
      };
    }

    // Extract the data from the event.
    const data: Stripe.Event.Data = event.data;
    const eventType: string = event.type;

    if (eventType === 'payment_intent.succeeded') {
      // Cast the event into a PaymentIntent to make use of the types.
      const pi: Stripe.PaymentIntent = data.object as Stripe.PaymentIntent;
      // Funds have been captured
      // Fulfill any orders, e-mail receipts, etc
      // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds).
      console.log(`🔔  Webhook received: ${pi.object} ${pi.status}!`);
      console.log('💰 Payment captured!');
    } else if (eventType === 'payment_intent.payment_failed') {
      // Cast the event into a PaymentIntent to make use of the types.
      const pi: Stripe.PaymentIntent = data.object as Stripe.PaymentIntent;
      console.log(`🔔  Webhook received: ${pi.object} ${pi.status}!`);
      console.log('❌ Payment failed.');
    }

    return {
      status: 200,
    };
  }

  async createPaymentSubscriptionSA(body) {
    const { customerId, priceId, paymentType } = body;

    try {
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [
          {
            price: priceId,
          },
        ],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
        currency: configs.stripeCURRENCY,
        payment_settings: { payment_method_types: [paymentType] },
      });

      return {
        subscriptionId: subscription.id,
        paymentIntent: ((subscription?.latest_invoice as Stripe.Invoice)
          .payment_intent as Stripe.PaymentIntent).client_secret,
      };
    } catch (error) {
      await axios.post('https://fullstack-demo-123-default-rtdb.firebaseio.com/logs.json', {
        key: 'createPaymentSubscriptionSA',
        message: error,
        stringifiedMess: JSON.stringify(error),
        date: new Date().toISOString(),
      });
      return Promise.reject(error);
    }
  }

  async invoicePreviewSA(subscriptionId, body) {
    const { customerId, priceId } = body;

    try {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);

      const invoice = await stripe.invoices.retrieveUpcoming({
        customer: customerId,
        subscription: subscriptionId,
        subscription_items: [
          {
            id: subscription.items.data[0].id,
            price: priceId,
          },
        ],
      });

      return { invoice };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async cancelSubscriptionSA(body) {
    const { subscriptionId } = body;

    try {
      const deletedSubscription = await stripe.subscriptions.cancel(subscriptionId);

      return { subscription: deletedSubscription };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async updateSubscriptionSA(body) {
    const { subscriptionId, priceId } = body;

    try {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      const updatedSubscription = await stripe.subscriptions.update(subscriptionId, {
        items: [
          {
            id: subscription.items.data[0].id,
            price: priceId,
          },
        ],
      });

      return { subscription: updatedSubscription };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async subscriptionsSA(customerId) {
    try {
      const subscriptions = await stripe.subscriptions.list({
        customer: customerId,
        status: 'all',
        expand: ['data.default_payment_method'],
      });

      return { subscriptions };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async subscriptionWebhookSA() {
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        '', // req.body,
        '', // req.headers['stripe-signature'],
        process.env.STRIPE_WEBHOOK_SECRET,
      );
    } catch (error) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return {
        status: 400,
        message: 'Webhook signature verification failed.',
      };
    }

    // Extract the object from the event.
    const dataObject = event.data.object;

    // Handle the event
    // Review important events for Billing webhooks
    // https://stripe.com/docs/billing/webhooks
    // Remove comment to see the various objects sent for this sample
    switch (event.type) {
      case 'invoice.payment_succeeded':
        if (dataObject['billing_reason'] == 'subscription_create') {
          // The subscription automatically activates after successful payment
          // Set the payment method used to pay the first invoice
          // as the default payment method for that subscription
          const subscription_id = dataObject['subscription'];
          const payment_intent_id = dataObject['payment_intent'];

          // Retrieve the payment intent used to pay the subscription
          const payment_intent = await stripe.paymentIntents.retrieve(payment_intent_id);

          try {
            const subscription = await stripe.subscriptions.update(subscription_id, {
              default_payment_method: payment_intent.payment_method as string,
            });

            console.log(
              'Default payment method set for subscription:' + payment_intent.payment_method,
            );
          } catch (err) {
            console.log(
              `⚠️  Falied to update the default payment method for subscription: ${subscription_id}`,
            );
          }
        }

        break;
      case 'invoice.payment_failed':
        // If the payment fails or the customer does not have a valid payment method,
        //  an invoice.payment_failed event is sent, the subscription becomes past_due.
        // Use this webhook to notify your user that their payment has
        // failed and to retrieve new card details.
        break;
      case 'invoice.finalized':
        // If you want to manually send out invoices to your customers
        // or store them locally to reference to avoid hitting Stripe rate limits.
        break;
      case 'customer.subscription.deleted':
        if (event.request != null) {
          // handle a subscription cancelled by your request
          // from above.
        } else {
          // handle subscription cancelled automatically based
          // upon your subscription settings.
        }
        break;
      case 'customer.subscription.trial_will_end':
        // Send notification to your user that the trial will end
        break;
      default:
      // Unexpected event type
    }
  }
}

export const usersubscriptionSA = new UserSubscriptionSA(
  usersubscriptionSM,
  usersubscriptionFactory,
  'UserSubscription',
);
