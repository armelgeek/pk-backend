import { GenericSA } from '../../common/service/generic.sa';
import {
    usercredentialFactory,
  UserCredentialFactory,
} from '../../constraint/factory/UserCredential';
import { UserCredentialDO } from '../../data/do/UserCredential';
// @ts-ignore
import { UserCredentialRequestDTO } from '../../data/dto/UserCredential/request';
// @ts-ignore
import { UserCredentialResponseDTO } from '../../data/dto/UserCredential/response';
import { usercredentialSM, UserCredentialSM } from '../metier/UserCredential';

export class UserCredentialSA extends GenericSA<
  UserCredentialDO,
  UserCredentialRequestDTO,
  UserCredentialResponseDTO,
  UserCredentialSM,
  UserCredentialFactory
> {
}

export const usercredentialSA = new UserCredentialSA(usercredentialSM, usercredentialFactory, 'UserCredential');

