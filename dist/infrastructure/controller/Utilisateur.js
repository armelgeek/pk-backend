"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateurController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Utilisateur_1 = require("../../service/applicatif/Utilisateur");
class UtilisateurController extends generic_controller_1.GenericController {
}
exports.utilisateurController = new UtilisateurController(Utilisateur_1.utilisateurSA);
//# sourceMappingURL=Utilisateur.js.map