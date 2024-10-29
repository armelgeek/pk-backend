"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSA = exports.MessageSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Message_1 = require("../../constraint/factory/Message");
const Message_2 = require("../metier/Message");
class MessageSA extends generic_sa_1.GenericSA {
}
exports.MessageSA = MessageSA;
exports.messageSA = new MessageSA(Message_2.messageSM, Message_1.messageFactory, 'Message');
//# sourceMappingURL=Message.js.map