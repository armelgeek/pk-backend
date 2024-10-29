"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategySA = exports.StrategySA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Strategy_1 = require("../../constraint/factory/Strategy");
const Strategy_2 = require("../metier/Strategy");
class StrategySA extends generic_sa_1.GenericSA {
}
exports.StrategySA = StrategySA;
exports.strategySA = new StrategySA(Strategy_2.strategySM, Strategy_1.strategyFactory, 'Strategy');
//# sourceMappingURL=Strategy.js.map