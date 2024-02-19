import { Router } from 'express';
import { conditionnalJwtPassport } from '../../service/middleware/passport/conditionnal-jwt-passport';
import { messageRouter } from './Message';
import { notificationRouter } from './Notification';
import { utilisateurRouter } from './Utilisateur';
import { langueRouter } from './Langue';
import { socialmediaRouter } from './SocialMedia';
import { baseinformationRouter } from './BaseInformation';
import { profileRouter } from './Profile';
import { sponsorRouter } from './Sponsor';
import { partenerRouter } from './Partener';
import { linksRouter } from './Links';
import { casinoprofileRouter } from './CasinoProfile';
import { casinoprofileadditionalRouter } from './CasinoProfileAdditional';
import { pseudoRouter } from './Pseudo';
import { roleRouter } from './Role';
import { complementaryinformationRouter } from './ComplementaryInformation';
import { clubRouter } from './Club';
import { privateeventRouter } from './PrivateEvent';

export const routes = () => {
  const router = Router();
  const secured = conditionnalJwtPassport(true);
 router.use('/message', messageRouter);
 router.use('/notification', notificationRouter);
 router.use('/utilisateur', utilisateurRouter);
 router.use('/langue', langueRouter);
 router.use('/social-media', socialmediaRouter);
 router.use('/base-information', baseinformationRouter);
 router.use('/profile', profileRouter);
 router.use('/sponsors', sponsorRouter);
 router.use('/partener', partenerRouter);
 router.use('/Links', linksRouter);
 router.use('/CasinoProfile', casinoprofileRouter);
 router.use('/CasinoProfileAdditional', casinoprofileadditionalRouter);
 router.use('/pseudo', pseudoRouter);
 router.use('/role', roleRouter);
 router.use('/complementary-information', complementaryinformationRouter);
 router.use('/club', clubRouter);
 router.use('/private-event', privateeventRouter);
  
  return router;
};

