import { EntityRepository, MongoRepository } from 'typeorm';

import { DeviceDO } from '../data/do/Device';

@EntityRepository(DeviceDO)
export class DeviceRepository extends MongoRepository<DeviceDO> {}

