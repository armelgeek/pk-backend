"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twofactorauthenticationController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const TwoFactorAuthentication_1 = require("../../service/applicatif/TwoFactorAuthentication");
class TwoFactorAuthenticationController extends generic_controller_1.GenericController {
}
exports.twofactorauthenticationController = new TwoFactorAuthenticationController(TwoFactorAuthentication_1.twofactorauthenticationSA);
//# sourceMappingURL=TwoFactorAuthentication.js.map