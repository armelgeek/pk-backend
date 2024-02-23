import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { SubscriptionOfferDO } from '../../data/do/SubscriptionOffer';
import { SubscriptionOfferRepository } from '../../repository/SubscriptionOffer';

export class SubscriptionOfferSM extends GenericSM<SubscriptionOfferDO, string, SubscriptionOfferRepository> {
}

export const subscriptionofferSM = new SubscriptionOfferSM(getCustomRepository(SubscriptionOfferRepository));

