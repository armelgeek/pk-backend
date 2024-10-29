"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confindialitySA = exports.ConfindialitySA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Confindiality_1 = require("../../constraint/factory/Confindiality");
const Confindiality_2 = require("../metier/Confindiality");
class ConfindialitySA extends generic_sa_1.GenericSA {
}
exports.ConfindialitySA = ConfindialitySA;
exports.confindialitySA = new ConfindialitySA(Confindiality_2.confindialitySM, Confindiality_1.confindialityFactory, 'Confindiality');
//# sourceMappingURL=Confindiality.js.map