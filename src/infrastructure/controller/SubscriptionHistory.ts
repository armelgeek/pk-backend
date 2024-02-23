import { GenericController } from '../../common/infrastructure/generic.controller';
import { SubscriptionHistoryDO } from '../../data/do/SubscriptionHistory';
// @ts-ignore
import { SubscriptionHistoryRequestDTO } from '../../data/dto/SubscriptionHistory/request';
// @ts-ignore
import { SubscriptionHistoryResponseDTO } from '../../data/dto/SubscriptionHistory/response';
import { subscriptionhistorySA, SubscriptionHistorySA } from '../../service/applicatif/SubscriptionHistory';

class SubscriptionHistoryController extends GenericController<
  SubscriptionHistoryDO,
  SubscriptionHistoryRequestDTO,
  SubscriptionHistoryResponseDTO,
  SubscriptionHistorySA
> {}

export const subscriptionhistoryController = new SubscriptionHistoryController(subscriptionhistorySA);

