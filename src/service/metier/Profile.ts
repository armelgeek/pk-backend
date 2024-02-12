import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { ProfileDO } from '../../data/do/Profile';
import { ProfileRepository } from '../../repository/Profile';

export class ProfileSM extends GenericSM<ProfileDO, string, ProfileRepository> {
}

export const profileSM = new ProfileSM(getCustomRepository(ProfileRepository));

