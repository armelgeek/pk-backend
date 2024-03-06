import dayjs = require('dayjs');
import { GenericController } from '../../common/infrastructure/generic.controller';
import { UserSubscriptionDO } from '../../data/do/UserSubscription';
// @ts-ignore
import { UserSubscriptionRequestDTO } from '../../data/dto/UserSubscription/request';
// @ts-ignore
import { UserSubscriptionResponseDTO } from '../../data/dto/UserSubscription/response';
import { usersubscriptionSA, UserSubscriptionSA } from '../../service/applicatif/UserSubscription';
import { subscriptionofferSA } from '../../service/applicatif/SubscriptionOffer';
import { SubscriptionOfferDO } from '../../data/do/SubscriptionOffer';
import { usercredentialSA } from '../../service/applicatif/UserCredential';

class UserSubscriptionController extends GenericController<
  UserSubscriptionDO,
  UserSubscriptionRequestDTO,
  UserSubscriptionResponseDTO,
  UserSubscriptionSA
> {
  async getSubscriptionByUser(req, res, next) {
    try {
      const data = await usersubscriptionSA.getSubscriptionByUserSA(req.params.id);
      res.locals.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  async paymentConfig(req, res, next) {
    try {
      const data = await usersubscriptionSA.paymentConfigSA();
      res.locals.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  async createCustomer(req, res, next) {
    try {
      const data = await usersubscriptionSA.createCustomerSA(req.body);
      await usercredentialSA.create({
        customerId: data.customer.id,
        userId: req.body.userId,
      });
      res.locals.data = {
        userId: req.body.userId,
        customerId: data.customer.id,
      };

      next();
    } catch (error) {
      next(error);
    }
  }

  async createPaymentIntent(req, res, next) {
    try {
      const data = await usersubscriptionSA.createPaymentIntentSA(req.body);
      res.locals.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  async webhook(req, res, next) {
    try {
      const data = await usersubscriptionSA.webhookSA();
      res.locals.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  async createPaymentSubscription(req, res, next) {
    try {
      const data = await usersubscriptionSA.createPaymentSubscriptionSA(req.body);
      res.locals.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  async invoicePreview(req, res, next) {
    try {
      const data = await usersubscriptionSA.invoicePreviewSA(req.query.subscriptionId, req.body);
      res.locals.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  async cancelSubscription(req, res, next) {
    try {
      const data = await usersubscriptionSA.cancelSubscriptionSA(req.body);
      res.locals.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  async updateSubscription(req, res, next) {
    try {
      const data = await usersubscriptionSA.updateSubscriptionSA(req.body);
      res.locals.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  async subscriptions(req, res, next) {
    try {
      const data = await usersubscriptionSA.subscriptionsSA(req.query.customerId);
      res.locals.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  async subscriptionWebhook(req, res, next) {
    try {
      const data = await usersubscriptionSA.subscriptionWebhookSA();
      res.locals.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }
}

export const usersubscriptionController = new UserSubscriptionController(usersubscriptionSA);
