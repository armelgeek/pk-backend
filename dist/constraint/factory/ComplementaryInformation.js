"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complementaryinformationFactory = exports.ComplementaryInformationFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.ComplementaryInformation.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class ComplementaryInformationFactory extends generic_factory_1.GenericFactory {
}
exports.ComplementaryInformationFactory = ComplementaryInformationFactory;
exports.complementaryinformationFactory = new ComplementaryInformationFactory(schema, schema, responseSchema);
//# sourceMappingURL=ComplementaryInformation.js.map