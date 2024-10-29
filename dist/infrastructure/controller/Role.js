"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Role_1 = require("../../service/applicatif/Role");
class RoleController extends generic_controller_1.GenericController {
}
exports.roleController = new RoleController(Role_1.roleSA);
//# sourceMappingURL=Role.js.map