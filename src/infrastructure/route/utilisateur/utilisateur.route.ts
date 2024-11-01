import { Router } from 'express';
import Jio from '../../../constraint/validator/joi';
import { authentificationRequestDTOSchema } from '../../../constraint/validator/joi/authentification.validator';
import {
  utilisateurEditRequestDTOSchema,
  utilisateurStatusRequestDTOSchema,
  utilisateurEditBORequestDTOSchema,
  utilisateurValidateResetRequestDTOSchema
} from '../../../constraint/validator/joi/utilisateur.validator';
import { schemaValidator } from '../../../service/middleware/joi';
// import { imageUpload } from '../../../service/middleware/multer';
import { conditionnalJwtPassport } from '../../../service/middleware/passport/conditionnal-jwt-passport';
import { responseFormatter } from '../../../service/middleware/response-formatter';
import { authentificationController } from '../../controller/authentification/authentification.controller';
// import { conditionnalJwtPassport } from '../../../service/middleware/passport/conditionnal-jwt-passport';
import { utilisateurController } from '../../controller/utilisateur/utilisateur.controller';


const utilisateurRoutes = () => {
  const router = Router();

  router.post(
    '/signin',
    schemaValidator(authentificationRequestDTOSchema),
    authentificationController.signin,
    // responseFormatter,
  );

  router.put(
    '/partialUpdate/:id',
    // imageUpload.single('image'),
    schemaValidator(utilisateurEditBORequestDTOSchema),
    utilisateurController.editUtilisateurBO,
  );

  router.put(
    '/status',
    schemaValidator(utilisateurStatusRequestDTOSchema),
    utilisateurController.changeUtilisateurStatus,
  );

  router.put(
    '/to-active',
    schemaValidator(utilisateurValidateResetRequestDTOSchema),
    utilisateurController.toActiveUtilisateur,
  );

  router.post(
    '/send/push',
    utilisateurController.notifyUser,
  );

  // router.post('/push', conditionnalJwtPassport(isSecured, name), controller.notifyUser, responseFormatter);

  router.get('/', utilisateurController.getAll);

  router.get('/:id', utilisateurController.getById);
  router.delete('/:id', conditionnalJwtPassport(true), utilisateurController.delete, responseFormatter);

  return router;
};

export const utilisateurRouter = utilisateurRoutes();

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
