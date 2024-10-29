"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complementaryinformationController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const ComplementaryInformation_1 = require("../../service/applicatif/ComplementaryInformation");
class ComplementaryInformationController extends generic_controller_1.GenericController {
}
exports.complementaryinformationController = new ComplementaryInformationController(ComplementaryInformation_1.complementaryinformationSA);
//# sourceMappingURL=ComplementaryInformation.js.map