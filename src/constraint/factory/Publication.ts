import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { PublicationDO } from '../../data/do/Publication';
// @ts-ignore
import { PublicationRequestDTO } from '../../data/dto/Publication/request';
// @ts-ignore
import { PublicationResponseDTO } from '../../data/dto/Publication/response';

const commonSchema = {
  ...dataTDO.Publication.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class PublicationFactory extends GenericFactory<
  PublicationDO,
  PublicationRequestDTO,
  PublicationResponseDTO
> {}

export const publicationFactory = new PublicationFactory(schema, schema, responseSchema);

