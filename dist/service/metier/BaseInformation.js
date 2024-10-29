"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseinformationSM = exports.BaseInformationSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const BaseInformation_1 = require("../../repository/BaseInformation");
class BaseInformationSM extends generic_sm_1.GenericSM {
}
exports.BaseInformationSM = BaseInformationSM;
exports.baseinformationSM = new BaseInformationSM((0, typeorm_1.getCustomRepository)(BaseInformation_1.BaseInformationRepository));
//# sourceMappingURL=BaseInformation.js.map