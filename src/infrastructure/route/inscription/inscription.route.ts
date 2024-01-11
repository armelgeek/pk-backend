import { Router } from 'express';

import { schemaValidator } from '../../../service/middleware/joi';
// import { imageUpload } from '../../../service/middleware/multer';
import { inscriptionRequestDTOSchema, reSendCodeRequestDTOSchema } from '../../../constraint/validator/joi/inscription.validator';
import { inscriptionController } from '../../controller/inscription/inscription.controller';
import { responseFormatter } from '../../../service/middleware/response-formatter';

const inscriptionRoutes = () => {
  const router = Router();

  router.post(
    '/',
    schemaValidator(inscriptionRequestDTOSchema),
    inscriptionController.signup,
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
 * POST /api/inscription
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

