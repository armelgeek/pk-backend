import { EntityRepository, MongoRepository } from 'typeorm';

import { AdministrateurDO } from '../data/do/administrateur';

@EntityRepository(AdministrateurDO)
export class AuthentificationRepository extends MongoRepository<AdministrateurDO> {}

