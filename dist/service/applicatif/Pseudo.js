"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pseudoSA = exports.PseudoSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Pseudo_1 = require("../../constraint/factory/Pseudo");
const Pseudo_2 = require("../metier/Pseudo");
class PseudoSA extends generic_sa_1.GenericSA {
}
exports.PseudoSA = PseudoSA;
exports.pseudoSA = new PseudoSA(Pseudo_2.pseudoSM, Pseudo_1.pseudoFactory, 'Pseudo');
//# sourceMappingURL=Pseudo.js.map