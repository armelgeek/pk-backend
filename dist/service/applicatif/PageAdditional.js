"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageadditionalSA = exports.PageAdditionalSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const PageAdditional_1 = require("../../constraint/factory/PageAdditional");
const PageAdditional_2 = require("../metier/PageAdditional");
class PageAdditionalSA extends generic_sa_1.GenericSA {
}
exports.PageAdditionalSA = PageAdditionalSA;
exports.pageadditionalSA = new PageAdditionalSA(PageAdditional_2.pageadditionalSM, PageAdditional_1.pageadditionalFactory, 'PageAdditional');
//# sourceMappingURL=PageAdditional.js.map