"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseinformationController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const BaseInformation_1 = require("../../service/applicatif/BaseInformation");
class BaseInformationController extends generic_controller_1.GenericController {
}
exports.baseinformationController = new BaseInformationController(BaseInformation_1.baseinformationSA);
//# sourceMappingURL=BaseInformation.js.map