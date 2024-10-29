"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.softbanSA = exports.SoftbanSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Softban_1 = require("../../constraint/factory/Softban");
const Softban_2 = require("../metier/Softban");
class SoftbanSA extends generic_sa_1.GenericSA {
}
exports.SoftbanSA = SoftbanSA;
exports.softbanSA = new SoftbanSA(Softban_2.softbanSM, Softban_1.softbanFactory, 'Softban');
//# sourceMappingURL=Softban.js.map