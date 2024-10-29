"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsFactory = exports.FriendsFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Friends.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class FriendsFactory extends generic_factory_1.GenericFactory {
}
exports.FriendsFactory = FriendsFactory;
exports.friendsFactory = new FriendsFactory(schema, schema, responseSchema);
//# sourceMappingURL=Friends.js.map