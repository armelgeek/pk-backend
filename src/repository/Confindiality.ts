import { EntityRepository, MongoRepository } from 'typeorm';

import { ConfindialityDO } from '../data/do/Confindiality';

@EntityRepository(ConfindialityDO)
export class ConfindialityRepository extends MongoRepository<ConfindialityDO> {}

