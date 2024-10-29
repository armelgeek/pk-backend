"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avisSM = exports.AvisSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Avis_1 = require("../../repository/Avis");
class AvisSM extends generic_sm_1.GenericSM {
}
exports.AvisSM = AvisSM;
exports.avisSM = new AvisSM((0, typeorm_1.getCustomRepository)(Avis_1.AvisRepository));
//# sourceMappingURL=Avis.js.map