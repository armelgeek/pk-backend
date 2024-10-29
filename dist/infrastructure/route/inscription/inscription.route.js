"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inscriptionRouter = void 0;
const express_1 = require("express");
const joi_1 = require("../../../service/middleware/joi");
// import { imageUpload } from '../../../service/middleware/multer';
const inscription_validator_1 = require("../../../constraint/validator/joi/inscription.validator");
const inscription_controller_1 = require("../../controller/inscription/inscription.controller");
const response_formatter_1 = require("../../../service/middleware/response-formatter");
const inscriptionRoutes = () => {
    const router = (0, express_1.Router)();
    router.post('/new', (0, joi_1.schemaValidator)(inscription_validator_1.inscriptionRequestDTOSchema), inscription_controller_1.inscriptionController.signup, response_formatter_1.responseFormatter);
    router.post('/social-auth', (0, joi_1.schemaValidator)(inscription_validator_1.socialInscriptionRequestDTOSchema), inscription_controller_1.inscriptionController.socialAuth, response_formatter_1.responseFormatter);
    router.post('/validation', (0, joi_1.schemaValidator)(inscription_validator_1.validationCodeRequestDTOSchema), inscription_controller_1.inscriptionController.validationCode, response_formatter_1.responseFormatter);
    router.put('/code', (0, joi_1.schemaValidator)(inscription_validator_1.reSendCodeRequestDTOSchema), inscription_controller_1.inscriptionController.reSendCode, response_formatter_1.responseFormatter);
    return router;
};
exports.inscriptionRouter = inscriptionRoutes();
/**
 * POST /api/inscription/new
 * @tags Inscription
 * @summary Créer un nouveau compte d'utilisateur
 * @param {SocialInscriptionRequestDTO} request.body.required - multipart/form-data
 * @return {InscriptionResponseDTO} 201 - Utilisateur créé
 * @return {object} 400 - Bad request
 * @return {object} 500
 */
/**
 * POST /api/inscription/social-auth
 * @tags Inscription
 * @summary Créer un nouveau compte d'utilisateur via social auth
 * @param {InscriptionRequestDTO} request.body.required - multipart/form-data
 * @return {InscriptionResponseDTO} 201 - Utilisateur créé
 * @return {object} 400 - Bad request
 * @return {object} 500
 */
/**
 * POST /api/inscription/validation
 * @tags Inscription
 * @summary Créer un nouveau compte d'utilisateur
 * @param {InscriptionRequestDTO} request.body.required - multipart/form-data
 * @return {InscriptionResponseDTO} 201 - Utilisateur créé
 * @return {object} 400 - Bad request
 * @return {object} 500
 */
/**
 * PUT /api/inscription/code
 * @tags Inscription
 * @summary re send code validation
 * @param {ResendCodeRequestDTO} request.body.required - multipart/form-data
 * @return {InscriptionResponseDTO} 201 - Utilisateur créé
 * @return {object} 400 - Bad request
 * @return {object} 500
 */
//# sourceMappingURL=inscription.route.js.map