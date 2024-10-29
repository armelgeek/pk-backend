"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationFactory = exports.RegistrationFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Registration.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class RegistrationFactory extends generic_factory_1.GenericFactory {
}
exports.RegistrationFactory = RegistrationFactory;
exports.registrationFactory = new RegistrationFactory(schema, schema, responseSchema);
//# sourceMappingURL=Registration.js.map