import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { GameTypeDO } from '../../data/do/GameType';
// @ts-ignore
import { GameTypeRequestDTO } from '../../data/dto/GameType/request';
// @ts-ignore
import { GameTypeResponseDTO } from '../../data/dto/GameType/response';

const commonSchema = {
  ...dataTDO.GameType.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class GameTypeFactory extends GenericFactory<
  GameTypeDO,
  GameTypeRequestDTO,
  GameTypeResponseDTO
> {}

export const gametypeFactory = new GameTypeFactory(schema, schema, responseSchema);

