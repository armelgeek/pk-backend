import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { FollowersDO } from '../../data/do/Followers';
import { FollowersRepository } from '../../repository/Followers';

export class FollowersSM extends GenericSM<FollowersDO, string, FollowersRepository> {
}

export const followersSM = new FollowersSM(getCustomRepository(FollowersRepository));

