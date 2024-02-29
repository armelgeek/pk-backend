import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { LevelDO } from '../../data/do/Level';
// @ts-ignore
import { LevelRequestDTO } from '../../data/dto/Level/request';
// @ts-ignore
import { LevelResponseDTO } from '../../data/dto/Level/response';

const commonSchema = {
  ...dataTDO.Level.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class LevelFactory extends GenericFactory<
  LevelDO,
  LevelRequestDTO,
  LevelResponseDTO
> {}

export const levelFactory = new LevelFactory(schema, schema, responseSchema);

