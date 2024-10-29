"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankrollSA = exports.BankRollSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const BankRoll_1 = require("../../constraint/factory/BankRoll");
const BankRoll_2 = require("../metier/BankRoll");
class BankRollSA extends generic_sa_1.GenericSA {
}
exports.BankRollSA = BankRollSA;
exports.bankrollSA = new BankRollSA(BankRoll_2.bankrollSM, BankRoll_1.bankrollFactory, 'BankRoll');
//# sourceMappingURL=BankRoll.js.map