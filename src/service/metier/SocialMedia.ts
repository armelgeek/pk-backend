import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { SocialMediaDO } from '../../data/do/SocialMedia';
import { SocialMediaRepository } from '../../repository/SocialMedia';

export class SocialMediaSM extends GenericSM<SocialMediaDO, string, SocialMediaRepository> {
}

export const socialmediaSM = new SocialMediaSM(getCustomRepository(SocialMediaRepository));

