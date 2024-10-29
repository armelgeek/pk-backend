"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersubscriptionFactory = exports.UserSubscriptionFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.UserSubscription.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    subscriptionStripeId: 'subscriptionStripeId',
};
class UserSubscriptionFactory extends generic_factory_1.GenericFactory {
}
exports.UserSubscriptionFactory = UserSubscriptionFactory;
exports.usersubscriptionFactory = new UserSubscriptionFactory(schema, schema, responseSchema);
//# sourceMappingURL=UserSubscription.js.map