import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { ClubDO } from '../../data/do/Club';
// @ts-ignore
import { ClubRequestDTO } from '../../data/dto/Club/request';
// @ts-ignore
import { ClubResponseDTO } from '../../data/dto/Club/response';

const commonSchema = {
  ...dataTDO.Club.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class ClubFactory extends GenericFactory<
  ClubDO,
  ClubRequestDTO,
  ClubResponseDTO
> {}

export const clubFactory = new ClubFactory(schema, schema, responseSchema);

