"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.participateSM = exports.ParticipateSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Participate_1 = require("../../repository/Participate");
class ParticipateSM extends generic_sm_1.GenericSM {
}
exports.ParticipateSM = ParticipateSM;
exports.participateSM = new ParticipateSM((0, typeorm_1.getCustomRepository)(Participate_1.ParticipateRepository));
//# sourceMappingURL=Participate.js.map