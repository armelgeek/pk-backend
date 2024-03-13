import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { ParticipateDO } from '../../data/do/Participate';
// @ts-ignore
import { ParticipateRequestDTO } from '../../data/dto/Participate/request';
// @ts-ignore
import { ParticipateResponseDTO } from '../../data/dto/Participate/response';

const commonSchema = {
  ...dataTDO.Participate.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class ParticipateFactory extends GenericFactory<
  ParticipateDO,
  ParticipateRequestDTO,
  ParticipateResponseDTO
> {}

export const participateFactory = new ParticipateFactory(schema, schema, responseSchema);

