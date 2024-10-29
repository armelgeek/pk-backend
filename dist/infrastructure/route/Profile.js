"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Profile_1 = require("../controller/Profile");
const profileRoutes = () => (0, generic_route_1.genericRoute)({ controller: Profile_1.profileController, schema: joi_1.default.Profile, name: 'Profile' });
exports.profileRouter = profileRoutes();
/**
 * POST /api/profile
 * @tags Profile
 * @security BearerAuth
 * @summary Create Profile (addProfile)
 * @param {ProfileRequestDTO} request.body
 * @return {ProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/profile
 * @tags Profile
 * @security BearerAuth
 * @summary List Profile (getAllProfile)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,photo,cover,type,email,gender,prenom,country,city,children,description,nom,situation,nbSignalement,banDate,endDate
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<ProfileResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/profile/{id}
 * @tags Profile
 * @security BearerAuth
 * @summary List Profile (getProfile)
 
 * @param {string} id.path.required
 * @return {ProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/profile/partialUpdate/{id}
 * @tags Profile
 * @security BearerAuth
 * @summary Update Profile (updateProfile)
 * @param {ProfileRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/profile/elements
 * @tags Profile
 * @security BearerAuth
 * @summary List Profile (getByIdsProfile)
 
 * @param {string} ids.query
 * @return {ProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Profile.js.map