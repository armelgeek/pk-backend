"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partenerSM = exports.PartenerSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Partener_1 = require("../../repository/Partener");
class PartenerSM extends generic_sm_1.GenericSM {
}
exports.PartenerSM = PartenerSM;
exports.partenerSM = new PartenerSM((0, typeorm_1.getCustomRepository)(Partener_1.PartenerRepository));
//# sourceMappingURL=Partener.js.map