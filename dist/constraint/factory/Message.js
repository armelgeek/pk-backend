"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageFactory = exports.MessageFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Message.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class MessageFactory extends generic_factory_1.GenericFactory {
}
exports.MessageFactory = MessageFactory;
exports.messageFactory = new MessageFactory(schema, schema, responseSchema);
//# sourceMappingURL=Message.js.map