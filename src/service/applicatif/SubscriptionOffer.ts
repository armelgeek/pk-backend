import { GenericSA } from '../../common/service/generic.sa';
import {
    subscriptionofferFactory,
  SubscriptionOfferFactory,
} from '../../constraint/factory/SubscriptionOffer';
import { SubscriptionOfferDO } from '../../data/do/SubscriptionOffer';
// @ts-ignore
import { SubscriptionOfferRequestDTO } from '../../data/dto/SubscriptionOffer/request';
// @ts-ignore
import { SubscriptionOfferResponseDTO } from '../../data/dto/SubscriptionOffer/response';
import { subscriptionofferSM, SubscriptionOfferSM } from '../metier/SubscriptionOffer';

export class SubscriptionOfferSA extends GenericSA<
  SubscriptionOfferDO,
  SubscriptionOfferRequestDTO,
  SubscriptionOfferResponseDTO,
  SubscriptionOfferSM,
  SubscriptionOfferFactory
> {
}

export const subscriptionofferSA = new SubscriptionOfferSA(subscriptionofferSM, subscriptionofferFactory, 'SubscriptionOffer');

