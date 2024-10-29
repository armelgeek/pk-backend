"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Filter_1 = require("../../service/applicatif/Filter");
class FilterController extends generic_controller_1.GenericController {
}
exports.filterController = new FilterController(Filter_1.filterSA);
//# sourceMappingURL=Filter.js.map