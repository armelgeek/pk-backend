"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageadditionalSM = exports.PageAdditionalSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const PageAdditional_1 = require("../../repository/PageAdditional");
class PageAdditionalSM extends generic_sm_1.GenericSM {
}
exports.PageAdditionalSM = PageAdditionalSM;
exports.pageadditionalSM = new PageAdditionalSM((0, typeorm_1.getCustomRepository)(PageAdditional_1.PageAdditionalRepository));
//# sourceMappingURL=PageAdditional.js.map