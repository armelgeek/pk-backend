"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daySM = exports.DaySM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Day_1 = require("../../repository/Day");
class DaySM extends generic_sm_1.GenericSM {
}
exports.DaySM = DaySM;
exports.daySM = new DaySM((0, typeorm_1.getCustomRepository)(Day_1.DayRepository));
//# sourceMappingURL=Day.js.map