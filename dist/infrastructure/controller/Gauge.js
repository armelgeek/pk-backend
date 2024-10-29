"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gaugeController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Gauge_1 = require("../../service/applicatif/Gauge");
class GaugeController extends generic_controller_1.GenericController {
}
exports.gaugeController = new GaugeController(Gauge_1.gaugeSA);
//# sourceMappingURL=Gauge.js.map