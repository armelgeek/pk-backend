"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagepermissionsController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const PagePermissions_1 = require("../../service/applicatif/PagePermissions");
class PagePermissionsController extends generic_controller_1.GenericController {
}
exports.pagepermissionsController = new PagePermissionsController(PagePermissions_1.pagepermissionsSA);
//# sourceMappingURL=PagePermissions.js.map