import { GenericController } from '../../common/infrastructure/generic.controller';
import { UserSubscriptionDO } from '../../data/do/UserSubscription';
// @ts-ignore
import { UserSubscriptionRequestDTO } from '../../data/dto/UserSubscription/request';
// @ts-ignore
import { UserSubscriptionResponseDTO } from '../../data/dto/UserSubscription/response';
import { usersubscriptionSA, UserSubscriptionSA } from '../../service/applicatif/UserSubscription';

class UserSubscriptionController extends GenericController<
  UserSubscriptionDO,
  UserSubscriptionRequestDTO,
  UserSubscriptionResponseDTO,
  UserSubscriptionSA
> {}

export const usersubscriptionController = new UserSubscriptionController(usersubscriptionSA);

