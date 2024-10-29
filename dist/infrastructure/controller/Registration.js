"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Registration_1 = require("../../service/applicatif/Registration");
class RegistrationController extends generic_controller_1.GenericController {
}
exports.registrationController = new RegistrationController(Registration_1.registrationSA);
//# sourceMappingURL=Registration.js.map