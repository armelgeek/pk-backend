import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../../common/service/generic.sm';
import { UtilisateurDO } from '../../../data/do/Utilisateur';
import { UtilisateurRepository } from '../../../repository/Utilisateur';

export class UtilisateurSM extends GenericSM<UtilisateurDO, string, UtilisateurRepository> {
}

export const utilisateurSM = new UtilisateurSM(getCustomRepository(UtilisateurRepository));
