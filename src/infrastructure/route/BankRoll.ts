import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { bankrollController } from '../controller/BankRoll';

const bankrollRoutes = () => genericRoute({ controller: bankrollController, schema: Joi.BankRoll, name: 'BankRoll' });

export const bankrollRouter = bankrollRoutes();

/**
 * GET /api/bank-roll
 * @tags BankRoll
 * @security BearerAuth
 * @summary List BankRoll (getAllBankRoll)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name,capital,devise,description
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<BankRollResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/bank-roll/{id}
 * @tags BankRoll
 * @security BearerAuth
 * @summary Remove BankRoll (deleteBankRoll)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/bank-roll/partialUpdate/{id}
 * @tags BankRoll
 * @security BearerAuth
 * @summary Update BankRoll (updateBankRoll)
 * @param {BankRollRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/bank-roll/{id}
 * @tags BankRoll
 * @security BearerAuth
 * @summary List BankRoll (getBankRoll)
 
 * @param {string} id.path.required 
 * @return {BankRollResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/bank-roll
 * @tags BankRoll
 * @security BearerAuth
 * @summary Create BankRoll (addBankRoll)
 * @param {BankRollRequestDTO} request.body 
 * @return {BankRollResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

