import { EntityRepository, MongoRepository } from 'typeorm';

import { BaseInformationDO } from '../data/do/BaseInformation';

@EntityRepository(BaseInformationDO)
export class BaseInformationRepository extends MongoRepository<BaseInformationDO> {}

