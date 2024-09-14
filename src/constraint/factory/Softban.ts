import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { SoftbanDO } from '../../data/do/Softban';
// @ts-ignore
import { SoftbanRequestDTO } from '../../data/dto/Softban/request';
// @ts-ignore
import { SoftbanResponseDTO } from '../../data/dto/Softban/response';

const commonSchema = {
  ...dataTDO.Softban.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class SoftbanFactory extends GenericFactory<
  SoftbanDO,
  SoftbanRequestDTO,
  SoftbanResponseDTO
> {}

export const softbanFactory = new SoftbanFactory(schema, schema, responseSchema);

