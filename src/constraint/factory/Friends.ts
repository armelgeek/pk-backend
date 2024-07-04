import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { FriendsDO } from '../../data/do/Friends';
// @ts-ignore
import { FriendsRequestDTO } from '../../data/dto/Friends/request';
// @ts-ignore
import { FriendsResponseDTO } from '../../data/dto/Friends/response';

const commonSchema = {
  ...dataTDO.Friends.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class FriendsFactory extends GenericFactory<
  FriendsDO,
  FriendsRequestDTO,
  FriendsResponseDTO
> {}

export const friendsFactory = new FriendsFactory(schema, schema, responseSchema);

