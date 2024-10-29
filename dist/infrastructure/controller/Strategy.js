"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategyController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Strategy_1 = require("../../service/applicatif/Strategy");
class StrategyController extends generic_controller_1.GenericController {
}
exports.strategyController = new StrategyController(Strategy_1.strategySA);
//# sourceMappingURL=Strategy.js.map