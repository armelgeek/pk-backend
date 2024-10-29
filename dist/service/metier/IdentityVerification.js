"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityverificationSM = exports.IdentityVerificationSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const IdentityVerification_1 = require("../../repository/IdentityVerification");
class IdentityVerificationSM extends generic_sm_1.GenericSM {
}
exports.IdentityVerificationSM = IdentityVerificationSM;
exports.identityverificationSM = new IdentityVerificationSM((0, typeorm_1.getCustomRepository)(IdentityVerification_1.IdentityVerificationRepository));
//# sourceMappingURL=IdentityVerification.js.map