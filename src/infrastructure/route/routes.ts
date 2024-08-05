import { Router } from 'express';
import { conditionnalJwtPassport } from '../../service/middleware/passport/conditionnal-jwt-passport';
import { notificationRouter } from './Notification';
import { utilisateurRouter } from './Utilisateur';
import { langueRouter } from './Langue';
import { socialnetworkRouter } from './SocialNetwork';
import { baseinformationRouter } from './BaseInformation';
import { profileRouter } from './Profile';
import { sponsorRouter } from './Sponsor';
import { partenerRouter } from './Partener';
import { linkRouter } from './Link';
import { pageRouter } from './Page';
import { pageadditionalRouter } from './PageAdditional';
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
import { identityverificationRouter } from './IdentityVerification';
import { codeparrainRouter } from './CodeParrain';
import { dayRouter } from './Day';
import { participateRouter } from './Participate';
import { sessionRouter } from './Session';
import { bankrollRouter } from './BankRoll';
import { deviceRouter } from './Device';
import { noteRouter } from './Note';
import { avisRouter } from './Avis';
import { messageRouter } from './Message';
import { followersRouter } from './Followers';
import { gaugeRouter } from './Gauge';
import { strategyRouter } from './Strategy';
import { notevalueRouter } from './NoteValue';
import { noticedRouter } from './Noticed';
import { partenariatRouter } from './Partenariat';
import { twofactorauthenticationRouter } from './TwoFactorAuthentication';
import { albumRouter } from './Album';
import { mediasRouter } from './Medias';
import { donationRouter } from './Donation';
import { registrationRouter } from './Registration';
import { settingsRouter } from './Settings';
import { reportRouter } from './Report';
import { visitorsRouter } from './Visitors';
import { filterRouter } from './Filter';
import { pagepermissionsRouter } from './PagePermissions';
import { friendsRouter } from './Friends';
import { sharingnoteRouter } from './SharingNote';

export const routes = () => {
  const router = Router();
  const secured = conditionnalJwtPassport(true);
 router.use('/notification', notificationRouter);
 router.use('/utilisateur', utilisateurRouter);
 router.use('/langue', langueRouter);
 router.use('/social-network', socialnetworkRouter);
 router.use('/base-information', baseinformationRouter);
 router.use('/profile', profileRouter);
 router.use('/sponsor', sponsorRouter);
 router.use('/partener', partenerRouter);
 router.use('/link', linkRouter);
 router.use('/page', pageRouter);
 router.use('/page-additional', pageadditionalRouter);
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
 router.use('/identity-verification', identityverificationRouter);
 router.use('/code-parrain', codeparrainRouter);
 router.use('/day', dayRouter);
 router.use('/participate', participateRouter);
 router.use('/session', sessionRouter);
 router.use('/bank-roll', bankrollRouter);
 router.use('/device', deviceRouter);
 router.use('/note', noteRouter);
 router.use('/avis', avisRouter);
 router.use('/message', messageRouter);
 router.use('/followers', followersRouter);
 router.use('/gauge', gaugeRouter);
 router.use('/strategy', strategyRouter);
 router.use('/note-value', notevalueRouter);
 router.use('/noticed', noticedRouter);
 router.use('/partenariat', partenariatRouter);
 router.use('/two-factor-authentication', twofactorauthenticationRouter);
 router.use('/album', albumRouter);
 router.use('/medias', mediasRouter);
 router.use('/donation', donationRouter);
 router.use('/registration', registrationRouter);
 router.use('/settings', settingsRouter);
 router.use('/report', reportRouter);
 router.use('/visitors', visitorsRouter);
 router.use('/filter', filterRouter);
 router.use('/page-permission', pagepermissionsRouter);
 router.use('/friends', friendsRouter);
 router.use('/sharing-note', sharingnoteRouter);
  
  return router;
};

