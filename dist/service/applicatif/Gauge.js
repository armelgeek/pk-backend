"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gaugeSA = exports.GaugeSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Gauge_1 = require("../../constraint/factory/Gauge");
const Gauge_2 = require("../metier/Gauge");
class GaugeSA extends generic_sa_1.GenericSA {
}
exports.GaugeSA = GaugeSA;
exports.gaugeSA = new GaugeSA(Gauge_2.gaugeSM, Gauge_1.gaugeFactory, 'Gauge');
//# sourceMappingURL=Gauge.js.map