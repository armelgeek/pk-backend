import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { UserCredentialDO } from '../../data/do/UserCredential';
import { UserCredentialRepository } from '../../repository/UserCredential';

export class UserCredentialSM extends GenericSM<UserCredentialDO, string, UserCredentialRepository> {
}

export const usercredentialSM = new UserCredentialSM(getCustomRepository(UserCredentialRepository));

