import { GenericController } from '../../common/infrastructure/generic.controller';
import { SubscriptionHistoryDO } from '../../data/do/SubscriptionHistory';
// @ts-ignore
import { SubscriptionHistoryRequestDTO } from '../../data/dto/SubscriptionHistory/request';
// @ts-ignore
import { SubscriptionHistoryResponseDTO } from '../../data/dto/SubscriptionHistory/response';
import {
  subscriptionhistorySA,
  SubscriptionHistorySA,
} from '../../service/applicatif/SubscriptionHistory';

class SubscriptionHistoryController extends GenericController<
  SubscriptionHistoryDO,
  SubscriptionHistoryRequestDTO,
  SubscriptionHistoryResponseDTO,
  SubscriptionHistorySA
> {
  async getSubscriptionHistoryByUser(req, res, next) {
    try {
      const { userId, pageId } = req.query;
      const data = await subscriptionhistorySA.getSubscriptionHistoryByUserSA(userId, pageId);
      res.locals.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }
}

export const subscriptionhistoryController = new SubscriptionHistoryController(
  subscriptionhistorySA,
);
