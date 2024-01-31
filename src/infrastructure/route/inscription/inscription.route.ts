import { Router } from 'express';

import { schemaValidator } from '../../../service/middleware/joi';
// import { imageUpload } from '../../../service/middleware/multer';
import { inscriptionRequestDTOSchema, reSendCodeRequestDTOSchema, socialInscriptionRequestDTOSchema, validationCodeRequestDTOSchema } from '../../../constraint/validator/joi/inscription.validator';
import { inscriptionController } from '../../controller/inscription/inscription.controller';
import { responseFormatter } from '../../../service/middleware/response-formatter';

const inscriptionRoutes = () => {
  const router = Router();

  router.post(
    '/new',
    schemaValidator(inscriptionRequestDTOSchema),
    inscriptionController.signup,
    responseFormatter,
  );

  router.post(
    '/social-auth',
    schemaValidator(socialInscriptionRequestDTOSchema),
    inscriptionController.socialAuth,
    responseFormatter,
  );

  router.post(
    '/validation',
    schemaValidator(validationCodeRequestDTOSchema),
    inscriptionController.validationCode,
    responseFormatter,
  );

  router.put(
    '/code',
    schemaValidator(reSendCodeRequestDTOSchema),
    inscriptionController.reSendCode,
    responseFormatter,
  );

  return router;
};

export const inscriptionRouter = inscriptionRoutes();

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
