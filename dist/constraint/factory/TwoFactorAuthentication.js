"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twofactorauthenticationFactory = exports.TwoFactorAuthenticationFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.TwoFactorAuthentication.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class TwoFactorAuthenticationFactory extends generic_factory_1.GenericFactory {
}
exports.TwoFactorAuthenticationFactory = TwoFactorAuthenticationFactory;
exports.twofactorauthenticationFactory = new TwoFactorAuthenticationFactory(schema, schema, responseSchema);
//# sourceMappingURL=TwoFactorAuthentication.js.map