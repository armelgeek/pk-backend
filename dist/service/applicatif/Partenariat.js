"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partenariatSA = exports.PartenariatSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Partenariat_1 = require("../../constraint/factory/Partenariat");
const Partenariat_2 = require("../metier/Partenariat");
class PartenariatSA extends generic_sa_1.GenericSA {
}
exports.PartenariatSA = PartenariatSA;
exports.partenariatSA = new PartenariatSA(Partenariat_2.partenariatSM, Partenariat_1.partenariatFactory, 'Partenariat');
//# sourceMappingURL=Partenariat.js.map