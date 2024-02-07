import { GenericController } from '../../common/infrastructure/generic.controller';
import { SocialMediaDO } from '../../data/do/SocialMedia';
// @ts-ignore
import { SocialMediaRequestDTO } from '../../data/dto/SocialMedia/request';
// @ts-ignore
import { SocialMediaResponseDTO } from '../../data/dto/SocialMedia/response';
import { socialmediaSA, SocialMediaSA } from '../../service/applicatif/SocialMedia';

class SocialMediaController extends GenericController<
  SocialMediaDO,
  SocialMediaRequestDTO,
  SocialMediaResponseDTO,
  SocialMediaSA
> {}

export const socialmediaController = new SocialMediaController(socialmediaSA);

