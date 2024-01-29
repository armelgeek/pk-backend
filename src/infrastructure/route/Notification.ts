import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { notificationController } from '../controller/Notification';

const notificationRoutes = () => genericRoute({ controller: notificationController, schema: Joi.Notification, name: 'Notification' });

export const notificationRouter = notificationRoutes();

