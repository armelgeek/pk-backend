import { EntityRepository, MongoRepository } from 'typeorm';
import { UtilisateurDO } from '../data/do/utilisateur/utilisateur.do';

@EntityRepository(UtilisateurDO)
export class UtilisateurRepository extends MongoRepository<UtilisateurDO> {}
