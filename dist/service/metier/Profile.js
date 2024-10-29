"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileSM = exports.ProfileSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Profile_1 = require("../../repository/Profile");
class ProfileSM extends generic_sm_1.GenericSM {
}
exports.ProfileSM = ProfileSM;
exports.profileSM = new ProfileSM((0, typeorm_1.getCustomRepository)(Profile_1.ProfileRepository));
//# sourceMappingURL=Profile.js.map