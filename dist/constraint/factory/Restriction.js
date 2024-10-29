"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictionFactory = exports.RestrictionFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Restriction.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class RestrictionFactory extends generic_factory_1.GenericFactory {
}
exports.RestrictionFactory = RestrictionFactory;
exports.restrictionFactory = new RestrictionFactory(schema, schema, responseSchema);
//# sourceMappingURL=Restriction.js.map