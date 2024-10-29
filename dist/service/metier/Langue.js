"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.langueSM = exports.LangueSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Langue_1 = require("../../repository/Langue");
class LangueSM extends generic_sm_1.GenericSM {
}
exports.LangueSM = LangueSM;
exports.langueSM = new LangueSM((0, typeorm_1.getCustomRepository)(Langue_1.LangueRepository));
//# sourceMappingURL=Langue.js.map