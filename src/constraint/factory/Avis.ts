import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { AvisDO } from '../../data/do/Avis';
// @ts-ignore
import { AvisRequestDTO } from '../../data/dto/Avis/request';
// @ts-ignore
import { AvisResponseDTO } from '../../data/dto/Avis/response';

const commonSchema = {
  ...dataTDO.Avis.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class AvisFactory extends GenericFactory<
  AvisDO,
  AvisRequestDTO,
  AvisResponseDTO
> {}

export const avisFactory = new AvisFactory(schema, schema, responseSchema);

