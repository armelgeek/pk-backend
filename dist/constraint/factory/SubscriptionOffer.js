"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionofferFactory = exports.SubscriptionOfferFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.SubscriptionOffer.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class SubscriptionOfferFactory extends generic_factory_1.GenericFactory {
}
exports.SubscriptionOfferFactory = SubscriptionOfferFactory;
exports.subscriptionofferFactory = new SubscriptionOfferFactory(schema, schema, responseSchema);
//# sourceMappingURL=SubscriptionOffer.js.map