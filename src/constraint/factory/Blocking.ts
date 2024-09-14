import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { BlockingDO } from '../../data/do/Blocking';
// @ts-ignore
import { BlockingRequestDTO } from '../../data/dto/Blocking/request';
// @ts-ignore
import { BlockingResponseDTO } from '../../data/dto/Blocking/response';

const commonSchema = {
  ...dataTDO.Blocking.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class BlockingFactory extends GenericFactory<
  BlockingDO,
  BlockingRequestDTO,
  BlockingResponseDTO
> {}

export const blockingFactory = new BlockingFactory(schema, schema, responseSchema);

