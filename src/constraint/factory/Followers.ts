import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { FollowersDO } from '../../data/do/Followers';
// @ts-ignore
import { FollowersRequestDTO } from '../../data/dto/Followers/request';
// @ts-ignore
import { FollowersResponseDTO } from '../../data/dto/Followers/response';

const commonSchema = {
  ...dataTDO.Followers.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class FollowersFactory extends GenericFactory<
  FollowersDO,
  FollowersRequestDTO,
  FollowersResponseDTO
> {}

export const followersFactory = new FollowersFactory(schema, schema, responseSchema);

