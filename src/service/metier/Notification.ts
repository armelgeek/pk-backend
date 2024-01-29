import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { NotificationDO } from '../../data/do/Notification';
import { NotificationRepository } from '../../repository/Notification';

export class NotificationSM extends GenericSM<NotificationDO, string, NotificationRepository> {
}

export const notificationSM = new NotificationSM(getCustomRepository(NotificationRepository));

