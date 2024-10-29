"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageSM = exports.PageSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Page_1 = require("../../repository/Page");
class PageSM extends generic_sm_1.GenericSM {
}
exports.PageSM = PageSM;
exports.pageSM = new PageSM((0, typeorm_1.getCustomRepository)(Page_1.PageRepository));
//# sourceMappingURL=Page.js.map