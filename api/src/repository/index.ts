import { EntityRepository, MongoRepository } from 'typeorm';

import { UtilisateurDO } from '../data/do/utilisateur/utilisateur.do';
import { AdministrateurDO } from '../data/do/administrateur';

@EntityRepository(AdministrateurDO)
export class AdministrateurRepository extends MongoRepository<AdministrateurDO> {}

@EntityRepository(UtilisateurDO)
export class UtilisateurRepository extends MongoRepository<UtilisateurDO> {}
