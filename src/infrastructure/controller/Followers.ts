import { GenericController } from '../../common/infrastructure/generic.controller';
import { FollowersDO } from '../../data/do/Followers';
// @ts-ignore
import { FollowersRequestDTO } from '../../data/dto/Followers/request';
// @ts-ignore
import { FollowersResponseDTO } from '../../data/dto/Followers/response';
import { followersSA, FollowersSA } from '../../service/applicatif/Followers';

class FollowersController extends GenericController<
  FollowersDO,
  FollowersRequestDTO,
  FollowersResponseDTO,
  FollowersSA
> {}

export const followersController = new FollowersController(followersSA);

