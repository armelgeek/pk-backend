import { GenericController } from '../../common/infrastructure/generic.controller';
import { SettingsDO } from '../../data/do/Settings';
// @ts-ignore
import { SettingsRequestDTO } from '../../data/dto/Settings/request';
// @ts-ignore
import { SettingsResponseDTO } from '../../data/dto/Settings/response';
import { settingsSA, SettingsSA } from '../../service/applicatif/Settings';

class SettingsController extends GenericController<
  SettingsDO,
  SettingsRequestDTO,
  SettingsResponseDTO,
  SettingsSA
> {}

export const settingsController = new SettingsController(settingsSA);

