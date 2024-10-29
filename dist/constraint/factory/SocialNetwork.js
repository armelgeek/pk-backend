"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialnetworkFactory = exports.SocialNetworkFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.SocialNetwork.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class SocialNetworkFactory extends generic_factory_1.GenericFactory {
}
exports.SocialNetworkFactory = SocialNetworkFactory;
exports.socialnetworkFactory = new SocialNetworkFactory(schema, schema, responseSchema);
//# sourceMappingURL=SocialNetwork.js.map