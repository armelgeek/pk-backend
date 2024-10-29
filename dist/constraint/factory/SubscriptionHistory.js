"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionhistoryFactory = exports.SubscriptionHistoryFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.SubscriptionHistory.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    subscriptionStripeId: 'subscriptionStripeId'
};
class SubscriptionHistoryFactory extends generic_factory_1.GenericFactory {
}
exports.SubscriptionHistoryFactory = SubscriptionHistoryFactory;
exports.subscriptionhistoryFactory = new SubscriptionHistoryFactory(schema, schema, responseSchema);
//# sourceMappingURL=SubscriptionHistory.js.map