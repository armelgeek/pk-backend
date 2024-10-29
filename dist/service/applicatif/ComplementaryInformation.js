"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complementaryinformationSA = exports.ComplementaryInformationSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const ComplementaryInformation_1 = require("../../constraint/factory/ComplementaryInformation");
const ComplementaryInformation_2 = require("../metier/ComplementaryInformation");
class ComplementaryInformationSA extends generic_sa_1.GenericSA {
}
exports.ComplementaryInformationSA = ComplementaryInformationSA;
exports.complementaryinformationSA = new ComplementaryInformationSA(ComplementaryInformation_2.complementaryinformationSM, ComplementaryInformation_1.complementaryinformationFactory, 'ComplementaryInformation');
//# sourceMappingURL=ComplementaryInformation.js.map