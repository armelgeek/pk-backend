import { EntityRepository, MongoRepository } from 'typeorm';

import { GameTypeDO } from '../data/do/GameType';

@EntityRepository(GameTypeDO)
export class GameTypeRepository extends MongoRepository<GameTypeDO> {}

