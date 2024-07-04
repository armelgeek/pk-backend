import { GenericController } from '../../common/infrastructure/generic.controller';
import { FriendsDO } from '../../data/do/Friends';
// @ts-ignore
import { FriendsRequestDTO } from '../../data/dto/Friends/request';
// @ts-ignore
import { FriendsResponseDTO } from '../../data/dto/Friends/response';
import { friendsSA, FriendsSA } from '../../service/applicatif/Friends';

class FriendsController extends GenericController<
  FriendsDO,
  FriendsRequestDTO,
  FriendsResponseDTO,
  FriendsSA
> {}

export const friendsController = new FriendsController(friendsSA);

