import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { SocialNetworkDO } from '../../data/do/SocialNetwork';
// @ts-ignore
import { SocialNetworkRequestDTO } from '../../data/dto/SocialNetwork/request';
// @ts-ignore
import { SocialNetworkResponseDTO } from '../../data/dto/SocialNetwork/response';

const commonSchema = {
  ...dataTDO.SocialNetwork.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class SocialNetworkFactory extends GenericFactory<
  SocialNetworkDO,
  SocialNetworkRequestDTO,
  SocialNetworkResponseDTO
> {}

export const socialnetworkFactory = new SocialNetworkFactory(schema, schema, responseSchema);

