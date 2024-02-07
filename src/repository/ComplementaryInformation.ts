import { EntityRepository, MongoRepository } from 'typeorm';

import { ComplementaryInformationDO } from '../data/do/ComplementaryInformation';

@EntityRepository(ComplementaryInformationDO)
export class ComplementaryInformationRepository extends MongoRepository<ComplementaryInformationDO> {}

