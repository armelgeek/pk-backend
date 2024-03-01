import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { PageAdditionalDO } from '../../data/do/PageAdditional';
// @ts-ignore
import { PageAdditionalRequestDTO } from '../../data/dto/PageAdditional/request';
// @ts-ignore
import { PageAdditionalResponseDTO } from '../../data/dto/PageAdditional/response';

const commonSchema = {
  ...dataTDO.PageAdditional.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class PageAdditionalFactory extends GenericFactory<
  PageAdditionalDO,
  PageAdditionalRequestDTO,
  PageAdditionalResponseDTO
> {}

export const pageadditionalFactory = new PageAdditionalFactory(schema, schema, responseSchema);

