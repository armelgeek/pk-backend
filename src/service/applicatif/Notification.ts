import { GenericSA } from '../../common/service/generic.sa';
import {
    notificationFactory,
  NotificationFactory,
} from '../../constraint/factory/Notification';
import { NotificationDO } from '../../data/do/Notification';
// @ts-ignore
import { NotificationRequestDTO } from '../../data/dto/Notification/request';
// @ts-ignore
import { NotificationResponseDTO } from '../../data/dto/Notification/response';
import { notificationSM, NotificationSM } from '../metier/Notification';

export class NotificationSA extends GenericSA<
  NotificationDO,
  NotificationRequestDTO,
  NotificationResponseDTO,
  NotificationSM,
  NotificationFactory
> {
}

export const notificationSA = new NotificationSA(notificationSM, notificationFactory, 'Notification');

