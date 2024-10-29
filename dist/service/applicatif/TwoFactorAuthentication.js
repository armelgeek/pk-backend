"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twofactorauthenticationSA = exports.TwoFactorAuthenticationSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const TwoFactorAuthentication_1 = require("../../constraint/factory/TwoFactorAuthentication");
const TwoFactorAuthentication_2 = require("../metier/TwoFactorAuthentication");
class TwoFactorAuthenticationSA extends generic_sa_1.GenericSA {
}
exports.TwoFactorAuthenticationSA = TwoFactorAuthenticationSA;
exports.twofactorauthenticationSA = new TwoFactorAuthenticationSA(TwoFactorAuthentication_2.twofactorauthenticationSM, TwoFactorAuthentication_1.twofactorauthenticationFactory, 'TwoFactorAuthentication');
//# sourceMappingURL=TwoFactorAuthentication.js.map