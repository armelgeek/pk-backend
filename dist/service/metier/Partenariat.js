"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partenariatSM = exports.PartenariatSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Partenariat_1 = require("../../repository/Partenariat");
class PartenariatSM extends generic_sm_1.GenericSM {
}
exports.PartenariatSM = PartenariatSM;
exports.partenariatSM = new PartenariatSM((0, typeorm_1.getCustomRepository)(Partenariat_1.PartenariatRepository));
//# sourceMappingURL=Partenariat.js.map