"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avisFactory = exports.AvisFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Avis.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class AvisFactory extends generic_factory_1.GenericFactory {
}
exports.AvisFactory = AvisFactory;
exports.avisFactory = new AvisFactory(schema, schema, responseSchema);
//# sourceMappingURL=Avis.js.map