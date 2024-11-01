import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { eventController } from '../controller/Event';

const eventRoutes = () => genericRoute({ controller: eventController, schema: Joi.Event, name: 'Event' });

export const eventRouter = eventRoutes();

/**
 * POST /api/event
 * @tags Event
 * @security BearerAuth
 * @summary Create Event (addEvent)
 * @param {EventRequestDTO} request.body 
 * @return {EventResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/event
 * @tags Event
 * @security BearerAuth
 * @summary List Event (getAllEvent)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name,participants,shortDescription,startTime,contact,description,reglements,photos,videos,nbDay,nbGames,startStack,nbRebu,devise,latReg,prizePool,bountyText,othersReward,jackpotText,buyin,bonusText,addonPrice,nbParticipantMax,titleDay,startTimeDay,lateReg,limitRegEntry,durationDay,duration,type,limitRegBuy,eventId,mainTournament,nbParticipantPerTable,cashBigBlind,cashSmallBlind,cashEntryMax,cashEntryMin,activityDate
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<EventResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/event/{id}
 * @tags Event
 * @security BearerAuth
 * @summary Remove Event (deleteEvent)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/event/partialUpdate/{id}
 * @tags Event
 * @security BearerAuth
 * @summary Update Event (updateEvent)
 * @param {EventRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/event/{id}
 * @tags Event
 * @security BearerAuth
 * @summary List Event (getEvent)
 
 * @param {string} id.path.required 
 * @return {EventResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

