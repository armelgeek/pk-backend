import { GenericController } from '../../../common/infrastructure/generic.controller';
import { AdministrateurDO } from '../../../data/do/administrateur';
// @ts-ignore
import { AdministrateurRequestDTO } from '../../../data/dto/Administrateur/request';
// @ts-ignore
import { AdministrateurResponseDTO } from '../../../data/dto/Administrateur/response';
import { administrateurSA, AdministrateurSA } from '../../../service/applicatif/administrateur';
import { AuthentificationSA, authentificationSA } from '../../../service/applicatif/authentification/authentification.sa';
import { UtilisateurSA, utilisateurSA } from '../../../service/applicatif/utilisateur/utilisateur.sa';
import { NotificationSA, notificationSA } from '../../../service/applicatif/Notification';

class AdministrateurController extends GenericController<
  AdministrateurDO,
  AdministrateurRequestDTO,
  AdministrateurResponseDTO,
  AdministrateurSA
> {
  utilisateurSA: UtilisateurSA;
  administrateurSA: AdministrateurSA;
  authentificationSA: AuthentificationSA;
  notificationSA: NotificationSA;

  constructor(administrateurSA: AdministrateurSA) {
    super(administrateurSA);
    this.administrateurSA = administrateurSA;
    this.utilisateurSA = utilisateurSA;
    this.notificationSA = notificationSA;
    this.authentificationSA = authentificationSA
  }

  renewalPwdBO = async (req, res, next) => {
    try {
      const { userId } = req.body;
      let res = null;

      const data = await this.utilisateurSA.findById(userId);

      if (data?.email || data?.phone) {
        await this.serviceSA.partialUpdate(userId, { actif: false });
        res = await this.authentificationSA.renewalPwdBO(data)
        await this.notificationSA.create({
          title: "Renouvellement de mot de passe",
          message: "L'administrateur a demandé que vous renouveliez votre mot de passe pour des raisons de sécurité.",
          type: "renewalPwdBO",
          receiver: data?.profileId
        })
      }

      res.locals.data = res;

      next();
    } catch (error) {
      next(error);
    }
  };
}

export const administrateurController = new AdministrateurController(administrateurSA);
