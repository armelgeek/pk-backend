import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { TournamentTypeDO } from '../../data/do/TournamentType';
// @ts-ignore
import { TournamentTypeRequestDTO } from '../../data/dto/TournamentType/request';
// @ts-ignore
import { TournamentTypeResponseDTO } from '../../data/dto/TournamentType/response';

const commonSchema = {
  ...dataTDO.TournamentType.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class TournamentTypeFactory extends GenericFactory<
  TournamentTypeDO,
  TournamentTypeRequestDTO,
  TournamentTypeResponseDTO
> {}

export const tournamenttypeFactory = new TournamentTypeFactory(schema, schema, responseSchema);

