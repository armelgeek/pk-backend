"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseinformationFactory = exports.BaseInformationFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.BaseInformation.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class BaseInformationFactory extends generic_factory_1.GenericFactory {
}
exports.BaseInformationFactory = BaseInformationFactory;
exports.baseinformationFactory = new BaseInformationFactory(schema, schema, responseSchema);
//# sourceMappingURL=BaseInformation.js.map