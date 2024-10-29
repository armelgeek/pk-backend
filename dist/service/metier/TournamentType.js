"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tournamenttypeSM = exports.TournamentTypeSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const TournamentType_1 = require("../../repository/TournamentType");
class TournamentTypeSM extends generic_sm_1.GenericSM {
}
exports.TournamentTypeSM = TournamentTypeSM;
exports.tournamenttypeSM = new TournamentTypeSM((0, typeorm_1.getCustomRepository)(TournamentType_1.TournamentTypeRepository));
//# sourceMappingURL=TournamentType.js.map