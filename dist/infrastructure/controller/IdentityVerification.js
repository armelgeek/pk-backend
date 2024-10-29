"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityverificationController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const IdentityVerification_1 = require("../../service/applicatif/IdentityVerification");
class IdentityVerificationController extends generic_controller_1.GenericController {
}
exports.identityverificationController = new IdentityVerificationController(IdentityVerification_1.identityverificationSA);
//# sourceMappingURL=IdentityVerification.js.map