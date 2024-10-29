"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usercredentialRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const UserCredential_1 = require("../controller/UserCredential");
const usercredentialRoutes = () => {
    const router = (0, generic_route_1.genericRoute)({
        controller: UserCredential_1.usercredentialController,
        schema: joi_1.default.UserCredential,
        name: 'UserCredential',
    });
    router.get('/user/:userId', UserCredential_1.usercredentialController.getUserCredsByUserId);
    return router;
};
exports.usercredentialRouter = usercredentialRoutes();
/**
 * GET /api/users-credential
 * @tags UserCredential
 * @security BearerAuth
 * @summary List UserCredential (getAllUserCredential)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {UserCredentialResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/user-credential/{id}
 * @tags UserCredential
 * @security BearerAuth
 * @summary Remove UserCredential (deleteUserCredential)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/user-credential/partialUpdate/{id}
 * @tags UserCredential
 * @security BearerAuth
 * @summary Update UserCredential (updateUserCredential)
 * @param {UserCredentialRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/user-credential/{id}
 * @tags UserCredential
 * @security BearerAuth
 * @summary List UserCredential (getUserCredential)
 
 * @param {string} id.path.required
 * @return {UserCredentialResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/user-credential
 * @tags UserCredential
 * @security BearerAuth
 * @summary Create UserCredential (addUserCredential)
 * @param {UserCredentialRequestDTO} request.body
 * @return {UserCredentialResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=UserCredential.js.map