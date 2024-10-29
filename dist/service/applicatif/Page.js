"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageSA = exports.PageSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Page_1 = require("../../constraint/factory/Page");
const Page_2 = require("../metier/Page");
class PageSA extends generic_sa_1.GenericSA {
}
exports.PageSA = PageSA;
exports.pageSA = new PageSA(Page_2.pageSM, Page_1.pageFactory, 'Page');
//# sourceMappingURL=Page.js.map