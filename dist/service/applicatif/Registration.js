"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationSA = exports.RegistrationSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Registration_1 = require("../../constraint/factory/Registration");
const Registration_2 = require("../metier/Registration");
class RegistrationSA extends generic_sa_1.GenericSA {
}
exports.RegistrationSA = RegistrationSA;
exports.registrationSA = new RegistrationSA(Registration_2.registrationSM, Registration_1.registrationFactory, 'Registration');
//# sourceMappingURL=Registration.js.map