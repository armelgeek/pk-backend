import { GenericController } from '../../common/infrastructure/generic.controller';
import { SubscriptionHistoryDO } from '../../data/do/SubscriptionHistory';
// @ts-ignore
import { SubscriptionHistoryRequestDTO } from '../../data/dto/SubscriptionHistory/request';
// @ts-ignore
import { SubscriptionHistoryResponseDTO } from '../../data/dto/SubscriptionHistory/response';
import { codeparrainSA } from '../../service/applicatif/CodeParrain';
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
      const codeParrain = await codeparrainSA.find();
      const finalResult = [];

      for (let index = 0; index < (data as any).length; index++) {
        const element = data[index];
        if (element.codeParrainId) {
          const usedCodeParrain = codeParrain.find(
            (code) => code.id.toString() === element.codeParrainId,
          );
          finalResult.push({ ...element, codeParrainId: usedCodeParrain });
        } else [finalResult.push(element)];
      }
      res.locals.data = finalResult;
      next();
    } catch (error) {
      next(error);
    }
  }
}

export const subscriptionhistoryController = new SubscriptionHistoryController(
  subscriptionhistorySA,
);
