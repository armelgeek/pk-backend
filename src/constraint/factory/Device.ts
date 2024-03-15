import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { DeviceDO } from '../../data/do/Device';
// @ts-ignore
import { DeviceRequestDTO } from '../../data/dto/Device/request';
// @ts-ignore
import { DeviceResponseDTO } from '../../data/dto/Device/response';

const commonSchema = {
  ...dataTDO.Device.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class DeviceFactory extends GenericFactory<
  DeviceDO,
  DeviceRequestDTO,
  DeviceResponseDTO
> {}

export const deviceFactory = new DeviceFactory(schema, schema, responseSchema);

