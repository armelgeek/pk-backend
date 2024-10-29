"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateurSA = exports.UtilisateurSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Utilisateur_1 = require("../../constraint/factory/Utilisateur");
const Utilisateur_2 = require("../metier/Utilisateur");
class UtilisateurSA extends generic_sa_1.GenericSA {
}
exports.UtilisateurSA = UtilisateurSA;
exports.utilisateurSA = new UtilisateurSA(Utilisateur_2.utilisateurSM, Utilisateur_1.utilisateurFactory, 'Utilisateur');
//# sourceMappingURL=Utilisateur.js.map