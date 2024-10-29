"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usercredentialSA = exports.UserCredentialSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const UserCredential_1 = require("../../constraint/factory/UserCredential");
const UserCredential_2 = require("../metier/UserCredential");
class UserCredentialSA extends generic_sa_1.GenericSA {
}
exports.UserCredentialSA = UserCredentialSA;
exports.usercredentialSA = new UserCredentialSA(UserCredential_2.usercredentialSM, UserCredential_1.usercredentialFactory, 'UserCredential');
//# sourceMappingURL=UserCredential.js.map