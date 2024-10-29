"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSM = exports.MessageSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Message_1 = require("../../repository/Message");
class MessageSM extends generic_sm_1.GenericSM {
}
exports.MessageSM = MessageSM;
exports.messageSM = new MessageSM((0, typeorm_1.getCustomRepository)(Message_1.MessageRepository));
//# sourceMappingURL=Message.js.map