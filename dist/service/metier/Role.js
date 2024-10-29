"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleSM = exports.RoleSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Role_1 = require("../../repository/Role");
class RoleSM extends generic_sm_1.GenericSM {
}
exports.RoleSM = RoleSM;
exports.roleSM = new RoleSM((0, typeorm_1.getCustomRepository)(Role_1.RoleRepository));
//# sourceMappingURL=Role.js.map