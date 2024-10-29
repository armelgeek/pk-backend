"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionofferSM = exports.SubscriptionOfferSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const SubscriptionOffer_1 = require("../../repository/SubscriptionOffer");
class SubscriptionOfferSM extends generic_sm_1.GenericSM {
}
exports.SubscriptionOfferSM = SubscriptionOfferSM;
exports.subscriptionofferSM = new SubscriptionOfferSM((0, typeorm_1.getCustomRepository)(SubscriptionOffer_1.SubscriptionOfferRepository));
//# sourceMappingURL=SubscriptionOffer.js.map