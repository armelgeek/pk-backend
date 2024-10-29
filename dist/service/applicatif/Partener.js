"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partenerSA = exports.PartenerSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Partener_1 = require("../../constraint/factory/Partener");
const Partener_2 = require("../metier/Partener");
class PartenerSA extends generic_sa_1.GenericSA {
}
exports.PartenerSA = PartenerSA;
exports.partenerSA = new PartenerSA(Partener_2.partenerSM, Partener_1.partenerFactory, 'Partener');
//# sourceMappingURL=Partener.js.map