"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twofactorauthenticationSM = exports.TwoFactorAuthenticationSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const TwoFactorAuthentication_1 = require("../../repository/TwoFactorAuthentication");
class TwoFactorAuthenticationSM extends generic_sm_1.GenericSM {
}
exports.TwoFactorAuthenticationSM = TwoFactorAuthenticationSM;
exports.twofactorauthenticationSM = new TwoFactorAuthenticationSM((0, typeorm_1.getCustomRepository)(TwoFactorAuthentication_1.TwoFactorAuthenticationRepository));
//# sourceMappingURL=TwoFactorAuthentication.js.map