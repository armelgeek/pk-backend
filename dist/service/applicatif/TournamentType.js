"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tournamenttypeSA = exports.TournamentTypeSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const TournamentType_1 = require("../../constraint/factory/TournamentType");
const TournamentType_2 = require("../metier/TournamentType");
class TournamentTypeSA extends generic_sa_1.GenericSA {
}
exports.TournamentTypeSA = TournamentTypeSA;
exports.tournamenttypeSA = new TournamentTypeSA(TournamentType_2.tournamenttypeSM, TournamentType_1.tournamenttypeFactory, 'TournamentType');
//# sourceMappingURL=TournamentType.js.map