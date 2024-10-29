"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationSM = exports.RegistrationSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Registration_1 = require("../../repository/Registration");
class RegistrationSM extends generic_sm_1.GenericSM {
}
exports.RegistrationSM = RegistrationSM;
exports.registrationSM = new RegistrationSM((0, typeorm_1.getCustomRepository)(Registration_1.RegistrationRepository));
//# sourceMappingURL=Registration.js.map