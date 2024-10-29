"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Message_1 = require("../../service/applicatif/Message");
class MessageController extends generic_controller_1.GenericController {
}
exports.messageController = new MessageController(Message_1.messageSA);
//# sourceMappingURL=Message.js.map