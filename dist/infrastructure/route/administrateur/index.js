"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.administrateurRouter = void 0;
const generic_route_1 = require("../../../common/infrastructure/generic.route");
const joi_1 = require("../../../constraint/validator/joi");
const administrateur_1 = require("../../controller/administrateur");
const administrateurRoutes = () => {
    const routes = (0, generic_route_1.genericRoute)({ controller: administrateur_1.administrateurController, schema: joi_1.default.Administrateur });
    routes.post('/renewal/pwd', administrateur_1.administrateurController.renewalPwdBO);
    return routes;
};
exports.administrateurRouter = administrateurRoutes();
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
//# sourceMappingURL=index.js.map