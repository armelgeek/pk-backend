"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleSA = exports.RoleSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Role_1 = require("../../constraint/factory/Role");
const Role_2 = require("../metier/Role");
class RoleSA extends generic_sa_1.GenericSA {
}
exports.RoleSA = RoleSA;
exports.roleSA = new RoleSA(Role_2.roleSM, Role_1.roleFactory, 'Role');
//# sourceMappingURL=Role.js.map