import { GenericSA } from '../../common/service/generic.sa';
import {
    utilisateurFactory,
  UtilisateurFactory,
} from '../../constraint/factory/Utilisateur';
import { UtilisateurDO } from '../../data/do/Utilisateur';
// @ts-ignore
import { UtilisateurRequestDTO } from '../../data/dto/Utilisateur/request';
// @ts-ignore
import { UtilisateurResponseDTO } from '../../data/dto/Utilisateur/response';
import { utilisateurSM, UtilisateurSM } from '../metier/Utilisateur';

export class UtilisateurSA extends GenericSA<
  UtilisateurDO,
  UtilisateurRequestDTO,
  UtilisateurResponseDTO,
  UtilisateurSM,
  UtilisateurFactory
> {
}

export const utilisateurSA = new UtilisateurSA(utilisateurSM, utilisateurFactory, 'Utilisateur');

