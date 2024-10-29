"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pseudoSM = exports.PseudoSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Pseudo_1 = require("../../repository/Pseudo");
class PseudoSM extends generic_sm_1.GenericSM {
}
exports.PseudoSM = PseudoSM;
exports.pseudoSM = new PseudoSM((0, typeorm_1.getCustomRepository)(Pseudo_1.PseudoRepository));
//# sourceMappingURL=Pseudo.js.map