import { GenericSA } from '../../common/service/generic.sa';
import {
    settingsFactory,
  SettingsFactory,
} from '../../constraint/factory/Settings';
import { SettingsDO } from '../../data/do/Settings';
// @ts-ignore
import { SettingsRequestDTO } from '../../data/dto/Settings/request';
// @ts-ignore
import { SettingsResponseDTO } from '../../data/dto/Settings/response';
import { settingsSM, SettingsSM } from '../metier/Settings';

export class SettingsSA extends GenericSA<
  SettingsDO,
  SettingsRequestDTO,
  SettingsResponseDTO,
  SettingsSM,
  SettingsFactory
> {
}

export const settingsSA = new SettingsSA(settingsSM, settingsFactory, 'Settings');

