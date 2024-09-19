import { genericRoute } from '../../../common/infrastructure/generic.route';
import Joi from '../../../constraint/validator/joi';
import { administrateurController } from '../../controller/administrateur';

import { utilisateurController } from '../../controller/utilisateur/utilisateur.controller';

const administrateurRoutes = () => {
  const routes = genericRoute({ controller: administrateurController, schema: Joi.Administrateur });

  routes.post(
    '/renewal/pwd',
    administrateurController.renewalPwdBO,
  );
  return routes;
}

export const administrateurRouter = administrateurRoutes();


/**
 * POST /api/administrateur
 * @tags Administrateur
 * @summary Créer un administrateur
 * @param {AdministrateurRequestDTO} request.body.required
 * @return {AdministrateurResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/administrateur
 * @tags Administrateur
 * @summary Modification d'un administrateur
 * @param {AdministrateurRequestDTO} request.body.required
 * @return {AdministrateurResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {boolean} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/administrateur/
 * @tags Administrateur
 * @summary Supprimer un administrateur
 * @param {string} id.path.required
 * @return {string} 200
 * @return {object} 500 - Erreur côté serveur
 */

/**
 * GET /api/administrateur
 * @tags Administrateur
 * @summary Liste des administrateur
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {array<AdministrateurResponseDTO>} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/administrateur/
 * @tags Administrateur
 * @summary Get By Id
 * @param {string} id.path.required
 * @return {AdministrateurResponseDTO} 200
 * @return {object} 500 - Erreur côté serveur
 */

/**
 * GET /api/administrateur/count
 * @tags Administrateur
 * @summary Nombre des administrateurs
 * @return {number} 200
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/administrateur/renewal/pwd
 * @tags Administrateur
 * @summary  Demande de renouvellement de mot de passe via la Back office
 * @param {string} userId.path.required
 * @return {boolean} 200
 * @return {object} 500 - Erreur côté serveur
 * @return {object} 400 - Données non conforme
 */
