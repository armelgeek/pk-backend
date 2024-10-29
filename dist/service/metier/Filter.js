"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSM = exports.FilterSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Filter_1 = require("../../repository/Filter");
class FilterSM extends generic_sm_1.GenericSM {
}
exports.FilterSM = FilterSM;
exports.filterSM = new FilterSM((0, typeorm_1.getCustomRepository)(Filter_1.FilterRepository));
//# sourceMappingURL=Filter.js.map