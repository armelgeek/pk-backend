import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { SocialNetworkDO } from '../../data/do/SocialNetwork';
import { SocialNetworkRepository } from '../../repository/SocialNetwork';

export class SocialNetworkSM extends GenericSM<SocialNetworkDO, string, SocialNetworkRepository> {
}

export const socialnetworkSM = new SocialNetworkSM(getCustomRepository(SocialNetworkRepository));

