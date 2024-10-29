"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventFactory = exports.EventFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Event.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class EventFactory extends generic_factory_1.GenericFactory {
}
exports.EventFactory = EventFactory;
exports.eventFactory = new EventFactory(schema, schema, responseSchema);
//# sourceMappingURL=Event.js.map