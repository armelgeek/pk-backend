"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usercredentialFactory = exports.UserCredentialFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.UserCredential.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class UserCredentialFactory extends generic_factory_1.GenericFactory {
}
exports.UserCredentialFactory = UserCredentialFactory;
exports.usercredentialFactory = new UserCredentialFactory(schema, schema, responseSchema);
//# sourceMappingURL=UserCredential.js.map