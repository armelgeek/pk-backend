"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersubscriptionSM = exports.UserSubscriptionSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const UserSubscription_1 = require("../../repository/UserSubscription");
class UserSubscriptionSM extends generic_sm_1.GenericSM {
}
exports.UserSubscriptionSM = UserSubscriptionSM;
exports.usersubscriptionSM = new UserSubscriptionSM((0, typeorm_1.getCustomRepository)(UserSubscription_1.UserSubscriptionRepository));
//# sourceMappingURL=UserSubscription.js.map