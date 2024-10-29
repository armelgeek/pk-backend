"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSA = exports.FilterSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Filter_1 = require("../../constraint/factory/Filter");
const Filter_2 = require("../metier/Filter");
class FilterSA extends generic_sa_1.GenericSA {
}
exports.FilterSA = FilterSA;
exports.filterSA = new FilterSA(Filter_2.filterSM, Filter_1.filterFactory, 'Filter');
//# sourceMappingURL=Filter.js.map