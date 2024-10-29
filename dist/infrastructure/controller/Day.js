"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Day_1 = require("../../service/applicatif/Day");
class DayController extends generic_controller_1.GenericController {
}
exports.dayController = new DayController(Day_1.daySA);
//# sourceMappingURL=Day.js.map