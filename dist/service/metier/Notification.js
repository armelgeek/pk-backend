"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationSM = exports.NotificationSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Notification_1 = require("../../repository/Notification");
class NotificationSM extends generic_sm_1.GenericSM {
}
exports.NotificationSM = NotificationSM;
exports.notificationSM = new NotificationSM((0, typeorm_1.getCustomRepository)(Notification_1.NotificationRepository));
//# sourceMappingURL=Notification.js.map