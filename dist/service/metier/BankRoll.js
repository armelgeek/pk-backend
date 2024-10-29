"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankrollSM = exports.BankRollSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const BankRoll_1 = require("../../repository/BankRoll");
class BankRollSM extends generic_sm_1.GenericSM {
}
exports.BankRollSM = BankRollSM;
exports.bankrollSM = new BankRollSM((0, typeorm_1.getCustomRepository)(BankRoll_1.BankRollRepository));
//# sourceMappingURL=BankRoll.js.map