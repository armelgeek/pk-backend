"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.administrateurController = void 0;
const generic_controller_1 = require("../../../common/infrastructure/generic.controller");
const administrateur_1 = require("../../../service/applicatif/administrateur");
const authentification_sa_1 = require("../../../service/applicatif/authentification/authentification.sa");
const utilisateur_sa_1 = require("../../../service/applicatif/utilisateur/utilisateur.sa");
const Notification_1 = require("../../../service/applicatif/Notification");
class AdministrateurController extends generic_controller_1.GenericController {
    constructor(administrateurSA) {
        super(administrateurSA);
        this.renewalPwdBO = async (req, res, next) => {
            try {
                const { userId } = req.body;
                let res = null;
                const data = await this.utilisateurSA.findById(userId);
                if ((data === null || data === void 0 ? void 0 : data.email) || (data === null || data === void 0 ? void 0 : data.phone)) {
                    await this.serviceSA.partialUpdate(userId, { actif: false });
                    res = await this.authentificationSA.renewalPwdBO(data);
                    await this.notificationSA.create({
                        title: "Renouvellement de mot de passe",
                        message: "L'administrateur a demandé que vous renouveliez votre mot de passe pour des raisons de sécurité.",
                        type: "renewalPwdBO",
                        receiver: data === null || data === void 0 ? void 0 : data.profileId
                    });
                }
                res.locals.data = res;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.administrateurSA = administrateurSA;
        this.utilisateurSA = utilisateur_sa_1.utilisateurSA;
        this.notificationSA = Notification_1.notificationSA;
        this.authentificationSA = authentification_sa_1.authentificationSA;
    }
}
exports.administrateurController = new AdministrateurController(administrateur_1.administrateurSA);
//# sourceMappingURL=index.js.map