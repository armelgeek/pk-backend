"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategySM = exports.StrategySM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Strategy_1 = require("../../repository/Strategy");
class StrategySM extends generic_sm_1.GenericSM {
}
exports.StrategySM = StrategySM;
exports.strategySM = new StrategySM((0, typeorm_1.getCustomRepository)(Strategy_1.StrategyRepository));
//# sourceMappingURL=Strategy.js.map