import { GenericController } from '../../common/infrastructure/generic.controller';
import { UtilisateurDO } from '../../data/do/Utilisateur';
// @ts-ignore
import { UtilisateurRequestDTO } from '../../data/dto/Utilisateur/request';
// @ts-ignore
import { UtilisateurResponseDTO } from '../../data/dto/Utilisateur/response';
import { utilisateurSA, UtilisateurSA } from '../../service/applicatif/Utilisateur';

class UtilisateurController extends GenericController<
  UtilisateurDO,
  UtilisateurRequestDTO,
  UtilisateurResponseDTO,
  UtilisateurSA
> {}

export const utilisateurController = new UtilisateurController(utilisateurSA);

