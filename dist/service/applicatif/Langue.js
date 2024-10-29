"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.langueSA = exports.LangueSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Langue_1 = require("../../constraint/factory/Langue");
const Langue_2 = require("../metier/Langue");
class LangueSA extends generic_sa_1.GenericSA {
}
exports.LangueSA = LangueSA;
exports.langueSA = new LangueSA(Langue_2.langueSM, Langue_1.langueFactory, 'Langue');
//# sourceMappingURL=Langue.js.map