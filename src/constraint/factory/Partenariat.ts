import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { PartenariatDO } from '../../data/do/Partenariat';
// @ts-ignore
import { PartenariatRequestDTO } from '../../data/dto/Partenariat/request';
// @ts-ignore
import { PartenariatResponseDTO } from '../../data/dto/Partenariat/response';

const commonSchema = {
  ...dataTDO.Partenariat.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class PartenariatFactory extends GenericFactory<
  PartenariatDO,
  PartenariatRequestDTO,
  PartenariatResponseDTO
> {}

export const partenariatFactory = new PartenariatFactory(schema, schema, responseSchema);

