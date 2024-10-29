"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.participateFactory = exports.ParticipateFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Participate.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class ParticipateFactory extends generic_factory_1.GenericFactory {
}
exports.ParticipateFactory = ParticipateFactory;
exports.participateFactory = new ParticipateFactory(schema, schema, responseSchema);
//# sourceMappingURL=Participate.js.map