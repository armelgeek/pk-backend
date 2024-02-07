import { Router } from 'express';
import { conditionnalJwtPassport } from '../../service/middleware/passport/conditionnal-jwt-passport';
import { messageRouter } from './Message';
import { notificationRouter } from './Notification';
import { utilisateurRouter } from './Utilisateur';
import { langueRouter } from './Langue';
import { socialmediaRouter } from './SocialMedia';
import { complementaryinformationRouter } from './ComplementaryInformation';
import { sponsorRouter } from './Sponsor';
import { partenerRouter } from './Partener';
import { linksRouter } from './Links';
import { casinoprofileRouter } from './CasinoProfile';
import { casinoprofileadditionalRouter } from './CasinoProfileAdditional';

export const routes = () => {
  const router = Router();
  const secured = conditionnalJwtPassport(true);
 router.use('/message', messageRouter);
 router.use('/notification', notificationRouter);
 router.use('/utilisateur', utilisateurRouter);
 router.use('/langue', langueRouter);
 router.use('/social-media', socialmediaRouter);
 router.use('/complementary-information', complementaryinformationRouter);
 router.use('/sponsors', sponsorRouter);
 router.use('/partener', partenerRouter);
 router.use('/Links', linksRouter);
 router.use('/CasinoProfile', casinoprofileRouter);
 router.use('/CasinoProfileAdditional', casinoprofileadditionalRouter);
  
  return router;
};

