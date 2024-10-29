"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Notification_1 = require("../../service/applicatif/Notification");
class NotificationController extends generic_controller_1.GenericController {
}
exports.notificationController = new NotificationController(Notification_1.notificationSA, "Notification");
//# sourceMappingURL=Notification.js.map