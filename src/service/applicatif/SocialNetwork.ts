import { GenericSA } from '../../common/service/generic.sa';
import {
    socialnetworkFactory,
  SocialNetworkFactory,
} from '../../constraint/factory/SocialNetwork';
import { SocialNetworkDO } from '../../data/do/SocialNetwork';
// @ts-ignore
import { SocialNetworkRequestDTO } from '../../data/dto/SocialNetwork/request';
// @ts-ignore
import { SocialNetworkResponseDTO } from '../../data/dto/SocialNetwork/response';
import { socialnetworkSM, SocialNetworkSM } from '../metier/SocialNetwork';

export class SocialNetworkSA extends GenericSA<
  SocialNetworkDO,
  SocialNetworkRequestDTO,
  SocialNetworkResponseDTO,
  SocialNetworkSM,
  SocialNetworkFactory
> {
}

export const socialnetworkSA = new SocialNetworkSA(socialnetworkSM, socialnetworkFactory, 'SocialNetwork');

