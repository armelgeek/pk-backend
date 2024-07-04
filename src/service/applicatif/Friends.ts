import { GenericSA } from '../../common/service/generic.sa';
import {
    friendsFactory,
  FriendsFactory,
} from '../../constraint/factory/Friends';
import { FriendsDO } from '../../data/do/Friends';
// @ts-ignore
import { FriendsRequestDTO } from '../../data/dto/Friends/request';
// @ts-ignore
import { FriendsResponseDTO } from '../../data/dto/Friends/response';
import { friendsSM, FriendsSM } from '../metier/Friends';

export class FriendsSA extends GenericSA<
  FriendsDO,
  FriendsRequestDTO,
  FriendsResponseDTO,
  FriendsSM,
  FriendsFactory
> {
}

export const friendsSA = new FriendsSA(friendsSM, friendsFactory, 'Friends');

