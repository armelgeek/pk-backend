import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { PageDO } from '../../data/do/Page';
// @ts-ignore
import { PageRequestDTO } from '../../data/dto/Page/request';
// @ts-ignore
import { PageResponseDTO } from '../../data/dto/Page/response';

const commonSchema = {
  ...dataTDO.Page.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class PageFactory extends GenericFactory<
  PageDO,
  PageRequestDTO,
  PageResponseDTO
> {}

export const pageFactory = new PageFactory(schema, schema, responseSchema);

