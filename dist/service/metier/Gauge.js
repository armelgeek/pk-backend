"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gaugeSM = exports.GaugeSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Gauge_1 = require("../../repository/Gauge");
class GaugeSM extends generic_sm_1.GenericSM {
}
exports.GaugeSM = GaugeSM;
exports.gaugeSM = new GaugeSM((0, typeorm_1.getCustomRepository)(Gauge_1.GaugeRepository));
//# sourceMappingURL=Gauge.js.map