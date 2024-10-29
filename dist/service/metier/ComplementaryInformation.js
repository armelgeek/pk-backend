"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complementaryinformationSM = exports.ComplementaryInformationSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const ComplementaryInformation_1 = require("../../repository/ComplementaryInformation");
class ComplementaryInformationSM extends generic_sm_1.GenericSM {
}
exports.ComplementaryInformationSM = ComplementaryInformationSM;
exports.complementaryinformationSM = new ComplementaryInformationSM((0, typeorm_1.getCustomRepository)(ComplementaryInformation_1.ComplementaryInformationRepository));
//# sourceMappingURL=ComplementaryInformation.js.map