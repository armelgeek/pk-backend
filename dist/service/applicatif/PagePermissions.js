"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagepermissionsSA = exports.PagePermissionsSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const PagePermissions_1 = require("../../constraint/factory/PagePermissions");
const PagePermissions_2 = require("../metier/PagePermissions");
class PagePermissionsSA extends generic_sa_1.GenericSA {
}
exports.PagePermissionsSA = PagePermissionsSA;
exports.pagepermissionsSA = new PagePermissionsSA(PagePermissions_2.pagepermissionsSM, PagePermissions_1.pagepermissionsFactory, 'PagePermissions');
//# sourceMappingURL=PagePermissions.js.map