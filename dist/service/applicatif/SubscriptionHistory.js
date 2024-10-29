"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionhistorySA = exports.SubscriptionHistorySA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const SubscriptionHistory_1 = require("../../constraint/factory/SubscriptionHistory");
const SubscriptionHistory_2 = require("../metier/SubscriptionHistory");
class SubscriptionHistorySA extends generic_sa_1.GenericSA {
    async getSubscriptionHistoryByUserSA(id, pageId) {
        try {
            let data = await exports.subscriptionhistorySA.findOneWithRelation({
                queries: { userId: id, pageId },
            });
            return data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
}
exports.SubscriptionHistorySA = SubscriptionHistorySA;
exports.subscriptionhistorySA = new SubscriptionHistorySA(SubscriptionHistory_2.subscriptionhistorySM, SubscriptionHistory_1.subscriptionhistoryFactory, 'SubscriptionHistory');
//# sourceMappingURL=SubscriptionHistory.js.map