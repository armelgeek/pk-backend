"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.followersFactory = exports.FollowersFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Followers.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class FollowersFactory extends generic_factory_1.GenericFactory {
}
exports.FollowersFactory = FollowersFactory;
exports.followersFactory = new FollowersFactory(schema, schema, responseSchema);
//# sourceMappingURL=Followers.js.map