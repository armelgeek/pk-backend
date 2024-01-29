import { GenericController } from '../../common/infrastructure/generic.controller';
import { NotificationDO } from '../../data/do/Notification';
// @ts-ignore
import { NotificationRequestDTO } from '../../data/dto/Notification/request';
// @ts-ignore
import { NotificationResponseDTO } from '../../data/dto/Notification/response';
import { notificationSA, NotificationSA } from '../../service/applicatif/Notification';

class NotificationController extends GenericController<
  NotificationDO,
  NotificationRequestDTO,
  NotificationResponseDTO,
  NotificationSA
> {}

export const notificationController = new NotificationController(notificationSA);

