import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { SettingsDO } from '../../data/do/Settings';
// @ts-ignore
import { SettingsRequestDTO } from '../../data/dto/Settings/request';
// @ts-ignore
import { SettingsResponseDTO } from '../../data/dto/Settings/response';

const commonSchema = {
  ...dataTDO.Settings.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class SettingsFactory extends GenericFactory<
  SettingsDO,
  SettingsRequestDTO,
  SettingsResponseDTO
> {}

export const settingsFactory = new SettingsFactory(schema, schema, responseSchema);

