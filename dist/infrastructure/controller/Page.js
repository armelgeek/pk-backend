"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Page_1 = require("../../service/applicatif/Page");
class PageController extends generic_controller_1.GenericController {
}
exports.pageController = new PageController(Page_1.pageSA);
//# sourceMappingURL=Page.js.map