import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { SettingsDO } from '../../data/do/Settings';
import { SettingsRepository } from '../../repository/Settings';

export class SettingsSM extends GenericSM<SettingsDO, string, SettingsRepository> {
}

export const settingsSM = new SettingsSM(getCustomRepository(SettingsRepository));

