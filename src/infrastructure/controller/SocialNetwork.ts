import { GenericController } from '../../common/infrastructure/generic.controller';
import { SocialNetworkDO } from '../../data/do/SocialNetwork';
// @ts-ignore
import { SocialNetworkRequestDTO } from '../../data/dto/SocialNetwork/request';
// @ts-ignore
import { SocialNetworkResponseDTO } from '../../data/dto/SocialNetwork/response';
import { socialnetworkSA, SocialNetworkSA } from '../../service/applicatif/SocialNetwork';

class SocialNetworkController extends GenericController<
  SocialNetworkDO,
  SocialNetworkRequestDTO,
  SocialNetworkResponseDTO,
  SocialNetworkSA
> {}

export const socialnetworkController = new SocialNetworkController(socialnetworkSA);

