"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateurSM = exports.UtilisateurSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../../common/service/generic.sm");
const Utilisateur_1 = require("../../../repository/Utilisateur");
class UtilisateurSM extends generic_sm_1.GenericSM {
}
exports.UtilisateurSM = UtilisateurSM;
exports.utilisateurSM = new UtilisateurSM((0, typeorm_1.getCustomRepository)(Utilisateur_1.UtilisateurRepository));
//# sourceMappingURL=utilisateur.sm.js.map