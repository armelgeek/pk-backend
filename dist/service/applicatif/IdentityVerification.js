"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityverificationSA = exports.IdentityVerificationSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const IdentityVerification_1 = require("../../constraint/factory/IdentityVerification");
const IdentityVerification_2 = require("../metier/IdentityVerification");
class IdentityVerificationSA extends generic_sa_1.GenericSA {
}
exports.IdentityVerificationSA = IdentityVerificationSA;
exports.identityverificationSA = new IdentityVerificationSA(IdentityVerification_2.identityverificationSM, IdentityVerification_1.identityverificationFactory, 'IdentityVerification');
//# sourceMappingURL=IdentityVerification.js.map