"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagepermissionsSM = exports.PagePermissionsSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const PagePermissions_1 = require("../../repository/PagePermissions");
class PagePermissionsSM extends generic_sm_1.GenericSM {
}
exports.PagePermissionsSM = PagePermissionsSM;
exports.pagepermissionsSM = new PagePermissionsSM((0, typeorm_1.getCustomRepository)(PagePermissions_1.PagePermissionsRepository));
//# sourceMappingURL=PagePermissions.js.map