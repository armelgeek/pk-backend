"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confindialitySM = exports.ConfindialitySM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Confindiality_1 = require("../../repository/Confindiality");
class ConfindialitySM extends generic_sm_1.GenericSM {
}
exports.ConfindialitySM = ConfindialitySM;
exports.confindialitySM = new ConfindialitySM((0, typeorm_1.getCustomRepository)(Confindiality_1.ConfindialityRepository));
//# sourceMappingURL=Confindiality.js.map