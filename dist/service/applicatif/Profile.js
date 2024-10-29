"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileSA = exports.ProfileSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Profile_1 = require("../../constraint/factory/Profile");
const Profile_2 = require("../metier/Profile");
class ProfileSA extends generic_sa_1.GenericSA {
}
exports.ProfileSA = ProfileSA;
exports.profileSA = new ProfileSA(Profile_2.profileSM, Profile_1.profileFactory, 'Profile');
//# sourceMappingURL=Profile.js.map