"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daySA = exports.DaySA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Day_1 = require("../../constraint/factory/Day");
const Day_2 = require("../metier/Day");
class DaySA extends generic_sa_1.GenericSA {
}
exports.DaySA = DaySA;
exports.daySA = new DaySA(Day_2.daySM, Day_1.dayFactory, 'Day');
//# sourceMappingURL=Day.js.map