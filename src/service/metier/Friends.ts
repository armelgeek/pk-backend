import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { FriendsDO } from '../../data/do/Friends';
import { FriendsRepository } from '../../repository/Friends';

export class FriendsSM extends GenericSM<FriendsDO, string, FriendsRepository> {
}

export const friendsSM = new FriendsSM(getCustomRepository(FriendsRepository));

