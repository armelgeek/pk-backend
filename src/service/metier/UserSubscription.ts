import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { UserSubscriptionDO } from '../../data/do/UserSubscription';
import { UserSubscriptionRepository } from '../../repository/UserSubscription';

export class UserSubscriptionSM extends GenericSM<UserSubscriptionDO, string, UserSubscriptionRepository> {
}

export const usersubscriptionSM = new UserSubscriptionSM(getCustomRepository(UserSubscriptionRepository));

