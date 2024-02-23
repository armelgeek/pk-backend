import { EntityRepository, MongoRepository } from 'typeorm';

import { TournamentTypeDO } from '../data/do/TournamentType';

@EntityRepository(TournamentTypeDO)
export class TournamentTypeRepository extends MongoRepository<TournamentTypeDO> {}

