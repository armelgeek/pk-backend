import { GenericSA } from '../../common/service/generic.sa';
import {
    followersFactory,
  FollowersFactory,
} from '../../constraint/factory/Followers';
import { FollowersDO } from '../../data/do/Followers';
// @ts-ignore
import { FollowersRequestDTO } from '../../data/dto/Followers/request';
// @ts-ignore
import { FollowersResponseDTO } from '../../data/dto/Followers/response';
import { followersSM, FollowersSM } from '../metier/Followers';

export class FollowersSA extends GenericSA<
  FollowersDO,
  FollowersRequestDTO,
  FollowersResponseDTO,
  FollowersSM,
  FollowersFactory
> {
}

export const followersSA = new FollowersSA(followersSM, followersFactory, 'Followers');

