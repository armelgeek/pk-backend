import { GenericSA } from '../../common/service/generic.sa';
import {
    profileFactory,
  ProfileFactory,
} from '../../constraint/factory/Profile';
import { ProfileDO } from '../../data/do/Profile';
// @ts-ignore
import { ProfileRequestDTO } from '../../data/dto/Profile/request';
// @ts-ignore
import { ProfileResponseDTO } from '../../data/dto/Profile/response';
import { profileSM, ProfileSM } from '../metier/Profile';

export class ProfileSA extends GenericSA<
  ProfileDO,
  ProfileRequestDTO,
  ProfileResponseDTO,
  ProfileSM,
  ProfileFactory
> {
}

export const profileSA = new ProfileSA(profileSM, profileFactory, 'Profile');

