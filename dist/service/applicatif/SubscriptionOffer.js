"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionofferSA = exports.SubscriptionOfferSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const SubscriptionOffer_1 = require("../../constraint/factory/SubscriptionOffer");
const SubscriptionOffer_2 = require("../metier/SubscriptionOffer");
class SubscriptionOfferSA extends generic_sa_1.GenericSA {
}
exports.SubscriptionOfferSA = SubscriptionOfferSA;
exports.subscriptionofferSA = new SubscriptionOfferSA(SubscriptionOffer_2.subscriptionofferSM, SubscriptionOffer_1.subscriptionofferFactory, 'SubscriptionOffer');
//# sourceMappingURL=SubscriptionOffer.js.map