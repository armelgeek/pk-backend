import { GenericSA } from '../../common/service/generic.sa';
import {
    usersubscriptionFactory,
  UserSubscriptionFactory,
} from '../../constraint/factory/UserSubscription';
import { UserSubscriptionDO } from '../../data/do/UserSubscription';
// @ts-ignore
import { UserSubscriptionRequestDTO } from '../../data/dto/UserSubscription/request';
// @ts-ignore
import { UserSubscriptionResponseDTO } from '../../data/dto/UserSubscription/response';
import { usersubscriptionSM, UserSubscriptionSM } from '../metier/UserSubscription';

export class UserSubscriptionSA extends GenericSA<
  UserSubscriptionDO,
  UserSubscriptionRequestDTO,
  UserSubscriptionResponseDTO,
  UserSubscriptionSM,
  UserSubscriptionFactory
> {
}

export const usersubscriptionSA = new UserSubscriptionSA(usersubscriptionSM, usersubscriptionFactory, 'UserSubscription');

