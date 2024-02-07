import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { socialmediaController } from '../controller/SocialMedia';

const socialmediaRoutes = () => genericRoute({ controller: socialmediaController, schema: Joi.SocialMedia, name: 'SocialMedia' });

export const socialmediaRouter = socialmediaRoutes();

