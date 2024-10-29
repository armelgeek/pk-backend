"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationSA = exports.NotificationSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Notification_1 = require("../../constraint/factory/Notification");
const Notification_2 = require("../metier/Notification");
class NotificationSA extends generic_sa_1.GenericSA {
}
exports.NotificationSA = NotificationSA;
exports.notificationSA = new NotificationSA(Notification_2.notificationSM, Notification_1.notificationFactory, 'Notification');
//# sourceMappingURL=Notification.js.map