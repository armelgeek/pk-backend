import { GenericSA } from '../../common/service/generic.sa';
import {
  subscriptionhistoryFactory,
  SubscriptionHistoryFactory,
} from '../../constraint/factory/SubscriptionHistory';
import { SubscriptionHistoryDO } from '../../data/do/SubscriptionHistory';
// @ts-ignore
import { SubscriptionHistoryRequestDTO } from '../../data/dto/SubscriptionHistory/request';
// @ts-ignore
import { SubscriptionHistoryResponseDTO } from '../../data/dto/SubscriptionHistory/response';
import { subscriptionhistorySM, SubscriptionHistorySM } from '../metier/SubscriptionHistory';

export class SubscriptionHistorySA extends GenericSA<
  SubscriptionHistoryDO,
  SubscriptionHistoryRequestDTO,
  SubscriptionHistoryResponseDTO,
  SubscriptionHistorySM,
  SubscriptionHistoryFactory
> {
  async getSubscriptionHistoryByUserSA(id: string, pageId: string) {
    try {
      let data = await subscriptionhistorySA.findOneWithRelation({
        queries: { userId: id, pageId },
      });

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const subscriptionhistorySA = new SubscriptionHistorySA(
  subscriptionhistorySM,
  subscriptionhistoryFactory,
  'SubscriptionHistory',
);
