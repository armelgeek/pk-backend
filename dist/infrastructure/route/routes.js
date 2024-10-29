"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const conditionnal_jwt_passport_1 = require("../../service/middleware/passport/conditionnal-jwt-passport");
const Notification_1 = require("./Notification");
const Utilisateur_1 = require("./Utilisateur");
const Langue_1 = require("./Langue");
const SocialNetwork_1 = require("./SocialNetwork");
const BaseInformation_1 = require("./BaseInformation");
const Profile_1 = require("./Profile");
const Sponsor_1 = require("./Sponsor");
const Partener_1 = require("./Partener");
const Link_1 = require("./Link");
const Page_1 = require("./Page");
const PageAdditional_1 = require("./PageAdditional");
const Pseudo_1 = require("./Pseudo");
const Role_1 = require("./Role");
const ComplementaryInformation_1 = require("./ComplementaryInformation");
const Club_1 = require("./Club");
const Event_1 = require("./Event");
const Confindiality_1 = require("./Confindiality");
const Comment_1 = require("./Comment");
const GameType_1 = require("./GameType");
const TournamentType_1 = require("./TournamentType");
const Publication_1 = require("./Publication");
const UserCredential_1 = require("./UserCredential");
const PaymentType_1 = require("./PaymentType");
const UserSubscription_1 = require("./UserSubscription");
const SubscriptionOffer_1 = require("./SubscriptionOffer");
const SubscriptionHistory_1 = require("./SubscriptionHistory");
const Level_1 = require("./Level");
const IdentityVerification_1 = require("./IdentityVerification");
const CodeParrain_1 = require("./CodeParrain");
const Day_1 = require("./Day");
const Participate_1 = require("./Participate");
const Session_1 = require("./Session");
const BankRoll_1 = require("./BankRoll");
const Device_1 = require("./Device");
const Note_1 = require("./Note");
const Avis_1 = require("./Avis");
const Message_1 = require("./Message");
const Followers_1 = require("./Followers");
const Gauge_1 = require("./Gauge");
const Strategy_1 = require("./Strategy");
const NoteValue_1 = require("./NoteValue");
const Noticed_1 = require("./Noticed");
const Partenariat_1 = require("./Partenariat");
const TwoFactorAuthentication_1 = require("./TwoFactorAuthentication");
const Album_1 = require("./Album");
const Medias_1 = require("./Medias");
const Donation_1 = require("./Donation");
const Registration_1 = require("./Registration");
const Settings_1 = require("./Settings");
const Report_1 = require("./Report");
const Visitors_1 = require("./Visitors");
const Filter_1 = require("./Filter");
const PagePermissions_1 = require("./PagePermissions");
const Friends_1 = require("./Friends");
const SharingNote_1 = require("./SharingNote");
const Restriction_1 = require("./Restriction");
const Softban_1 = require("./Softban");
const Blocking_1 = require("./Blocking");
const Assessment_1 = require("./Assessment");
const routes = () => {
    const router = (0, express_1.Router)();
    const secured = (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(true);
    router.use('/notification', Notification_1.notificationRouter);
    router.use('/utilisateur', Utilisateur_1.utilisateurRouter);
    router.use('/langue', Langue_1.langueRouter);
    router.use('/social-network', SocialNetwork_1.socialnetworkRouter);
    router.use('/base-information', BaseInformation_1.baseinformationRouter);
    router.use('/profile', Profile_1.profileRouter);
    router.use('/sponsor', Sponsor_1.sponsorRouter);
    router.use('/partener', Partener_1.partenerRouter);
    router.use('/link', Link_1.linkRouter);
    router.use('/page', Page_1.pageRouter);
    router.use('/page-additional', PageAdditional_1.pageadditionalRouter);
    router.use('/pseudo', Pseudo_1.pseudoRouter);
    router.use('/role', Role_1.roleRouter);
    router.use('/complementary-information', ComplementaryInformation_1.complementaryinformationRouter);
    router.use('/club', Club_1.clubRouter);
    router.use('/event', Event_1.eventRouter);
    router.use('/confindiality', Confindiality_1.confindialityRouter);
    router.use('/comment', Comment_1.commentRouter);
    router.use('/game-type', GameType_1.gametypeRouter);
    router.use('/tournament-type', TournamentType_1.tournamenttypeRouter);
    router.use('/publication', Publication_1.publicationRouter);
    router.use('/user-credential', UserCredential_1.usercredentialRouter);
    router.use('/payment-type', PaymentType_1.paymenttypeRouter);
    router.use('/user-subscription', UserSubscription_1.usersubscriptionRouter);
    router.use('/subscription-offer', SubscriptionOffer_1.subscriptionofferRouter);
    router.use('/subscription-history', SubscriptionHistory_1.subscriptionhistoryRouter);
    router.use('/level', Level_1.levelRouter);
    router.use('/identity-verification', IdentityVerification_1.identityverificationRouter);
    router.use('/code-parrain', CodeParrain_1.codeparrainRouter);
    router.use('/day', Day_1.dayRouter);
    router.use('/participate', Participate_1.participateRouter);
    router.use('/session', Session_1.sessionRouter);
    router.use('/bank-roll', BankRoll_1.bankrollRouter);
    router.use('/device', Device_1.deviceRouter);
    router.use('/note', Note_1.noteRouter);
    router.use('/avis', Avis_1.avisRouter);
    router.use('/message', Message_1.messageRouter);
    router.use('/followers', Followers_1.followersRouter);
    router.use('/gauge', Gauge_1.gaugeRouter);
    router.use('/strategy', Strategy_1.strategyRouter);
    router.use('/note-value', NoteValue_1.notevalueRouter);
    router.use('/noticed', Noticed_1.noticedRouter);
    router.use('/partenariat', Partenariat_1.partenariatRouter);
    router.use('/two-factor-authentication', TwoFactorAuthentication_1.twofactorauthenticationRouter);
    router.use('/album', Album_1.albumRouter);
    router.use('/medias', Medias_1.mediasRouter);
    router.use('/donation', Donation_1.donationRouter);
    router.use('/registration', Registration_1.registrationRouter);
    router.use('/settings', Settings_1.settingsRouter);
    router.use('/report', Report_1.reportRouter);
    router.use('/visitors', Visitors_1.visitorsRouter);
    router.use('/filter', Filter_1.filterRouter);
    router.use('/page-permission', PagePermissions_1.pagepermissionsRouter);
    router.use('/friends', Friends_1.friendsRouter);
    router.use('/sharing-note', SharingNote_1.sharingnoteRouter);
    router.use('/restriction', Restriction_1.restrictionRouter);
    router.use('/softban', Softban_1.softbanRouter);
    router.use('/blocking', Blocking_1.blockingRouter);
    router.use('/assessment', Assessment_1.assessmentRouter);
    return router;
};
exports.routes = routes;
//# sourceMappingURL=routes.js.map