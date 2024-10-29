"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankrollController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const BankRoll_1 = require("../../service/applicatif/BankRoll");
class BankRollController extends generic_controller_1.GenericController {
}
exports.bankrollController = new BankRollController(BankRoll_1.bankrollSA);
//# sourceMappingURL=BankRoll.js.map