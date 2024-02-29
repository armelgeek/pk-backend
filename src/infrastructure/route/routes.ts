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
import { linkRouter } from './Link';
import { casinoprofileRouter } from './CasinoProfile';
import { casinoprofileadditionalRouter } from './CasinoProfileAdditional';
import { pseudoRouter } from './Pseudo';
import { roleRouter } from './Role';
import { complementaryinformationRouter } from './ComplementaryInformation';
import { clubRouter } from './Club';
import { eventRouter } from './Event';
import { confindialityRouter } from './Confindiality';
import { commentRouter } from './Comment';
import { gametypeRouter } from './GameType';
import { tournamenttypeRouter } from './TournamentType';
import { publicationRouter } from './Publication';
import { usercredentialRouter } from './UserCredential';
import { paymenttypeRouter } from './PaymentType';
import { usersubscriptionRouter } from './UserSubscription';
import { subscriptionofferRouter } from './SubscriptionOffer';
import { subscriptionhistoryRouter } from './SubscriptionHistory';
import { levelRouter } from './Level';

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
 router.use('/sponsor', sponsorRouter);
 router.use('/partener', partenerRouter);
 router.use('/link', linkRouter);
 router.use('/casino-profile', casinoprofileRouter);
 router.use('/casino-profile-additional', casinoprofileadditionalRouter);
 router.use('/pseudo', pseudoRouter);
 router.use('/role', roleRouter);
 router.use('/complementary-information', complementaryinformationRouter);
 router.use('/club', clubRouter);
 router.use('/event', eventRouter);
 router.use('/confindiality', confindialityRouter);
 router.use('/comment', commentRouter);
 router.use('/game-type', gametypeRouter);
 router.use('/tournament-type', tournamenttypeRouter);
 router.use('/publication', publicationRouter);
 router.use('/user-credential', usercredentialRouter);
 router.use('/payment-type', paymenttypeRouter);
 router.use('/user-subscription', usersubscriptionRouter);
 router.use('/subscription-offer', subscriptionofferRouter);
 router.use('/subscription-history', subscriptionhistoryRouter);
 router.use('/level', levelRouter);
  
  return router;
};

