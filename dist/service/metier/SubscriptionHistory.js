"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionhistorySM = exports.SubscriptionHistorySM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const SubscriptionHistory_1 = require("../../repository/SubscriptionHistory");
class SubscriptionHistorySM extends generic_sm_1.GenericSM {
}
exports.SubscriptionHistorySM = SubscriptionHistorySM;
exports.subscriptionhistorySM = new SubscriptionHistorySM((0, typeorm_1.getCustomRepository)(SubscriptionHistory_1.SubscriptionHistoryRepository));
//# sourceMappingURL=SubscriptionHistory.js.map