import { EntityRepository, MongoRepository } from 'typeorm';

import { SettingsDO } from '../data/do/Settings';

@EntityRepository(SettingsDO)
export class SettingsRepository extends MongoRepository<SettingsDO> {}

