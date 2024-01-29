import { EntityRepository, MongoRepository } from 'typeorm';
import { UtilisateurDO } from '../data/do/Utilisateur';

@EntityRepository(UtilisateurDO)
export class UtilisateurRepository extends MongoRepository<UtilisateurDO> {}
