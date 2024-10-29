"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionofferController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const SubscriptionOffer_1 = require("../../service/applicatif/SubscriptionOffer");
class SubscriptionOfferController extends generic_controller_1.GenericController {
}
exports.subscriptionofferController = new SubscriptionOfferController(SubscriptionOffer_1.subscriptionofferSA);
//# sourceMappingURL=SubscriptionOffer.js.map