"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseinformationSA = exports.BaseInformationSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const BaseInformation_1 = require("../../constraint/factory/BaseInformation");
const BaseInformation_2 = require("../metier/BaseInformation");
class BaseInformationSA extends generic_sa_1.GenericSA {
}
exports.BaseInformationSA = BaseInformationSA;
exports.baseinformationSA = new BaseInformationSA(BaseInformation_2.baseinformationSM, BaseInformation_1.baseinformationFactory, 'BaseInformation');
//# sourceMappingURL=BaseInformation.js.map