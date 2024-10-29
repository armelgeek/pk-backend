"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avisSA = exports.AvisSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Avis_1 = require("../../constraint/factory/Avis");
const Avis_2 = require("../metier/Avis");
class AvisSA extends generic_sa_1.GenericSA {
}
exports.AvisSA = AvisSA;
exports.avisSA = new AvisSA(Avis_2.avisSM, Avis_1.avisFactory, 'Avis');
//# sourceMappingURL=Avis.js.map