"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gaugeRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Gauge_1 = require("../controller/Gauge");
const gaugeRoutes = () => (0, generic_route_1.genericRoute)({ controller: Gauge_1.gaugeController, schema: joi_1.default.Gauge, name: 'Gauge' });
exports.gaugeRouter = gaugeRoutes();
/**
 * GET /api/gauge
 * @tags Gauge
 * @security BearerAuth
 * @summary List Gauge (getAllGauge)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,labelRight,labelLeft,value
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<GaugeResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/gauge/{id}
 * @tags Gauge
 * @security BearerAuth
 * @summary Remove Gauge (deleteGauge)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/gauge/partialUpdate/{id}
 * @tags Gauge
 * @security BearerAuth
 * @summary Update Gauge (updateGauge)
 * @param {GaugeRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/gauge/{id}
 * @tags Gauge
 * @security BearerAuth
 * @summary List Gauge (getGauge)
 
 * @param {string} id.path.required
 * @return {GaugeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/gauge
 * @tags Gauge
 * @security BearerAuth
 * @summary Create Gauge (addGauge)
 * @param {GaugeRequestDTO} request.body
 * @return {GaugeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Gauge.js.map