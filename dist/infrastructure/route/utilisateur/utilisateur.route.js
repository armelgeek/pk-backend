"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateurRouter = void 0;
const express_1 = require("express");
const authentification_validator_1 = require("../../../constraint/validator/joi/authentification.validator");
const utilisateur_validator_1 = require("../../../constraint/validator/joi/utilisateur.validator");
const joi_1 = require("../../../service/middleware/joi");
// import { imageUpload } from '../../../service/middleware/multer';
const conditionnal_jwt_passport_1 = require("../../../service/middleware/passport/conditionnal-jwt-passport");
const response_formatter_1 = require("../../../service/middleware/response-formatter");
const authentification_controller_1 = require("../../controller/authentification/authentification.controller");
// import { conditionnalJwtPassport } from '../../../service/middleware/passport/conditionnal-jwt-passport';
const utilisateur_controller_1 = require("../../controller/utilisateur/utilisateur.controller");
const utilisateurRoutes = () => {
    const router = (0, express_1.Router)();
    router.post('/signin', (0, joi_1.schemaValidator)(authentification_validator_1.authentificationRequestDTOSchema), authentification_controller_1.authentificationController.signin);
    router.put('/partialUpdate/:id', 
    // imageUpload.single('image'),
    (0, joi_1.schemaValidator)(utilisateur_validator_1.utilisateurEditBORequestDTOSchema), utilisateur_controller_1.utilisateurController.editUtilisateurBO);
    router.put('/status', (0, joi_1.schemaValidator)(utilisateur_validator_1.utilisateurStatusRequestDTOSchema), utilisateur_controller_1.utilisateurController.changeUtilisateurStatus);
    router.put('/to-active', (0, joi_1.schemaValidator)(utilisateur_validator_1.utilisateurValidateResetRequestDTOSchema), utilisateur_controller_1.utilisateurController.toActiveUtilisateur);
    router.post('/send/push', utilisateur_controller_1.utilisateurController.notifyUser);
    // router.post('/push', conditionnalJwtPassport(isSecured, name), controller.notifyUser, responseFormatter);
    router.get('/', utilisateur_controller_1.utilisateurController.getAll);
    router.get('/:id', utilisateur_controller_1.utilisateurController.getById);
    router.delete('/:id', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(true), utilisateur_controller_1.utilisateurController.delete, response_formatter_1.responseFormatter);
    return router;
};
exports.utilisateurRouter = utilisateurRoutes();
/**
 * PUT /api/utilisateur
 * @tags Utilisateur
 * @summary Modifier un utilisateur
 * @param {UtilisateurEditBORequestDTO} request.body.required - multipart/form-data
 * @return {boolean} 200
 * @return  {object} 500 - Erreur côté serveur
 */
/**
 * PUT /api/utilisateur/profil
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Modifier les informations sur un utilisateur
 * @param {UtilisateurEditRequestDTO} request.body.required - multipart/form-data
 * @return {boolean} 200
 * @return  {object} 500 - Erreur côté serveur
 */
/**
 * PUT /api/utilisateur/status
 * @tags Utilisateur
 * @summary Modifier le statut d'un utlisateur actif ou non
 * @param {UtilisateurStatusRequestDTO} request.body.required
 * @return {boolean} 200
 * @return {object} 500 - Erreur côté serveur
 * @return {object} 400 - Données non conforme
 */
/**
 * POST /api/users/to-active
 * @tags Utilisateur
 * @summary Modifier le statut d'un utlisateur actif ou non
 * @param {UtilisateurToActiveRequestDTO} request.body.required
 * @return {boolean} 200
 * @return {object} 500 - Erreur côté serveur
 * @return {object} 400 - Données non conforme
 */
/**
 * GET /api/utilisateur
 * @tags Utilisateur
 * @summary Liste des utilisateurs
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:nom,phone,email,ville,dateInscription,dateDerniereConnexion
 * @param {string} order.query - enum:ASC,DESC
 * @param {string} nom.query
 * @return {array<UtilisateurResponseDTO>} 200
 * @return {object} 500 - Erreur côté serveur
 * @return {object} 400 - Données non conforme
 */
/**
 * PUT /api/utilisateur/partialUpdate/{id}
 * @tags Utilisateur
 * @summary Modification d'un region
 * @param {string} id.path.required
 * @param {RegionRequestDTO} request.body.required
 * @return {RegionResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {boolean} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/utilisateur/{id}
 * @tags Utilisateur
 * @summary Supprimer un utilisateur
 * @param {string} id.path.required
 * @return {string} 200
 * @return {object} 500 - Erreur côté serveur
 */
/**
 * GET /api/utilisateur/{id}
 * @tags Utilisateur
 * @summary Récupérer un utilisateur par son id
 * @param {string} id.path.required
 * @return {UtilisateurResponseBODTO} 200
 * @return {object} 500 - Erreur côté serveur
 * @return {object} 400 - Données non conforme
 */
/**
 * POST /api/users/send/push
 * @tags Utilisateur
 * @summary envoyer des push notifications aux tokens fournis
 * @param {NotificationRequestDTO} request.body.required
 * @return {boolean} 200
 * @return {object} 500 - Erreur côté serveur
 * @return {object} 400 - Données non conforme
 */
/**
 * POST /api/utilisateur/desactive-request
 * @tags Utilisateur
 * @summary envoyer une demande de desactivation de compte
 * @param {string} userId.path.required
 * @param {string} password.path.required
 * @return {boolean} 200
 * @return {object} 500 - Erreur côté serveur
 * @return {object} 400 - Données non conforme
 */
/**
 * POST /api/utilisateur/desactive-confirm
 * @tags Utilisateur
 * @summary confirmer la demande de desactivation de compte
 * @param {string} userId.path.required
 * @return {boolean} 200
 * @return {object} 500 - Erreur côté serveur
 * @return {object} 400 - Données non conforme
 */
/**
 * POST /api/utilisateur/re-activate
 * @tags Utilisateur
 * @summary  reactiver le compte
 * @param {string} userId.path.required
 * @return {boolean} 200
 * @return {object} 500 - Erreur côté serveur
 * @return {object} 400 - Données non conforme
 */
/**
 * POST /api/utilisateur/delete-account-request
 * @tags Utilisateur
 * @summary  envoyer une demande de suppression de compte
 * @param {string} userId.path.required
 * @param {string} password.path.required
 * @return {boolean} 200
 * @return {object} 500 - Erreur côté serveur
 * @return {object} 400 - Données non conforme
 */
/**
 * POST /api/utilisateur/delete-account-confirm
 * @tags Utilisateur
 * @summary  confirmer la demande de suppression de compte
 * @param {string} userId.path.required
 * @return {boolean} 200
 * @return {object} 500 - Erreur côté serveur
 * @return {object} 400 - Données non conforme
 */
/**
 * POST /api/utilisateur/request-reactivate
 * @tags Utilisateur
 * @summary  envoyer une demande de reactivation de compte
 * @param {string} userId.path.required
 * @return {boolean} 200
 * @return {object} 500 - Erreur côté serveur
 * @return {object} 400 - Données non conforme
 */
/**
 * POST /api/utilisateur/confirm-reactivate
 * @tags Utilisateur
 * @summary  confirmer une demande de reactivation de compte
 * @param {string} userId.path.required
 * @param {string} code.path.required
 * @return {boolean} 200
 * @return {object} 500 - Erreur côté serveur
 * @return {object} 400 - Données non conforme
 */
/**
 * GET /api/profile/find/by-ids
 * @tags Profile
 * @security BearerAuth
 * @summary List Profile (getAllProfileByIds)
 * @param {array<string>} ids.query
 * @return {array<ProfileResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=utilisateur.route.js.map