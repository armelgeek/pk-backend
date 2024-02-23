import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { SubscriptionHistoryDO } from '../../data/do/SubscriptionHistory';
import { SubscriptionHistoryRepository } from '../../repository/SubscriptionHistory';

export class SubscriptionHistorySM extends GenericSM<SubscriptionHistoryDO, string, SubscriptionHistoryRepository> {
}

export const subscriptionhistorySM = new SubscriptionHistorySM(getCustomRepository(SubscriptionHistoryRepository));

