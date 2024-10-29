"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityverificationFactory = exports.IdentityVerificationFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.IdentityVerification.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class IdentityVerificationFactory extends generic_factory_1.GenericFactory {
}
exports.IdentityVerificationFactory = IdentityVerificationFactory;
exports.identityverificationFactory = new IdentityVerificationFactory(schema, schema, responseSchema);
//# sourceMappingURL=IdentityVerification.js.map