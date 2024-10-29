"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentificationRouter = void 0;
const express_1 = require("express");
const authentification_validator_1 = require("../../../constraint/validator/joi/authentification.validator");
const utilisateur_validator_1 = require("../../../constraint/validator/joi/utilisateur.validator");
const joi_1 = require("../../../service/middleware/joi");
const response_formatter_1 = require("../../../service/middleware/response-formatter");
const authentification_controller_1 = require("../../controller/authentification/authentification.controller");
const authentificationRoutes = () => {
    const router = (0, express_1.Router)();
    router.post('/', (0, joi_1.schemaValidator)(authentification_validator_1.authentificationRequestDTOSchema), authentification_controller_1.authentificationController.signin);
    router.post('/user', (0, joi_1.schemaValidator)(authentification_validator_1.authentificationRequestDTOSchema), authentification_controller_1.authentificationController.signin);
    router.get('/refreshToken/:refreshToken', authentification_controller_1.authentificationController.getAccessTokenFromRefreshToken);
    router
        .route('/reset-password')
        .put((0, joi_1.schemaValidator)(authentification_validator_1.resetPasswordRequestDTOSchema), authentification_controller_1.authentificationController.resetPassword, response_formatter_1.responseFormatter)
        .post((0, joi_1.schemaValidator)(utilisateur_validator_1.utilisateurPasswordResetRequestDTOSchema), authentification_controller_1.authentificationController.passwordResetRequest, response_formatter_1.responseFormatter);
    router
        .route('/two-factor-authentication')
        .post((0, joi_1.schemaValidator)(utilisateur_validator_1.utilisateurPasswordResetRequestDTOSchema), authentification_controller_1.authentificationController.twoFactorAuthentication, response_formatter_1.responseFormatter);
    router.get('/verify-reset-token/:resetToken', authentification_controller_1.authentificationController.verifyResetToken);
    router.post('/admin', (0, joi_1.schemaValidator)(authentification_validator_1.authentificationRequestDTOSchema), authentification_controller_1.authentificationController.signinAdim);
    router.post('/signout', (0, joi_1.schemaValidator)(authentification_validator_1.authentificationSignoutRequestDTOSchema), authentification_controller_1.authentificationController.signout);
    return router;
};
exports.authentificationRouter = authentificationRoutes();
/**
 * POST /api/authentification/user
 * @tags Authentification
 * @summary Se connecter à la plateforme
 * @param {AuthentificationRequestDTO} request.body.required
 * @return {AuthentificationResponseDTO} 200
 * @return {object} 400 - Mot de passe ou email éronné
 * @return {object} 500 - Erreur côté serveur
 */
/**
 * POST /api/authentification/signout
 * @tags Authentification
 * @summary Se déconnecter de la plateforme
 * @param {AuthentificationSignoutRequestDTO} request.body.required
 * @return {boolean} 200
 * @return {object} 400 - Mot de passe ou email éronné
 * @return {object} 500 - Erreur côté serveur
 */
/**
 * POST /api/authentification/admin
 * @tags Authentification
 * @summary Se connecter au BO
 * @param {AuthentificationRequestDTO} request.body.required
 * @return {AuthentificationResponseDTO} 200
 * @return {object} 400 - Mot de passe ou email éronné
 * @return {object} 500 - Erreur côté serveur
 */
/**
 * GET /api/authentification/
 * @tags Authentification
 * @summary Générer un nouveau accessToken à partir du refreshToken
 * @param {string} refreshToken.path.required
 * @return {AuthentificationResponseDTO} 200
 * @return {object} 400 - Mot de passe ou email éronné
 * @return {object} 500 - Erreur côté serveur
 */
/**
 * POST /api/authentification/two-factor-authentication
 * @tags Authentification
 * @summary Authentification à deux facteurs
 * @param {ResetPasswordRequestDTO} request.body.required
 * @return {boolean} 200
 * @return {object} 400 - Bad request
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/authentification/reset-password
 * @tags Authentification
 * @summary Demander une réinitialisation de mot de passe
 * @param {ResetPasswordRequestDTO} request.body.required
 * @return {boolean} 200
 * @return {object} 400 - Bad request
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/authentification/reset-password
 * @tags Authentification
 * @summary Valider le changement de mot de passe
 * @param {ResetPasswordConfirmRequestDTO} request.body.required
 * @return {boolean} 200
 * @return {object} 400
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/authentification/verify-reset-token/
 * @tags Authentification
 * @summary Vérifier la validité du token de réinitialisation de mot de passe
 * @param {string} resetToken.path.required
 * @return {InscriptionResponseDTO} 200
 * @return {object} 500 - Erreur interne du serveur
 * @return {object} 400 - Lien de réinitialisation invalide
 */
//# sourceMappingURL=authentification.route.js.map