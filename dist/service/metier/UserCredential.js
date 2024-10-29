"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usercredentialSM = exports.UserCredentialSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const UserCredential_1 = require("../../repository/UserCredential");
class UserCredentialSM extends generic_sm_1.GenericSM {
}
exports.UserCredentialSM = UserCredentialSM;
exports.usercredentialSM = new UserCredentialSM((0, typeorm_1.getCustomRepository)(UserCredential_1.UserCredentialRepository));
//# sourceMappingURL=UserCredential.js.map