import { GenericSA } from '../../common/service/generic.sa';
import {
    socialmediaFactory,
  SocialMediaFactory,
} from '../../constraint/factory/SocialMedia';
import { SocialMediaDO } from '../../data/do/SocialMedia';
// @ts-ignore
import { SocialMediaRequestDTO } from '../../data/dto/SocialMedia/request';
// @ts-ignore
import { SocialMediaResponseDTO } from '../../data/dto/SocialMedia/response';
import { socialmediaSM, SocialMediaSM } from '../metier/SocialMedia';

export class SocialMediaSA extends GenericSA<
  SocialMediaDO,
  SocialMediaRequestDTO,
  SocialMediaResponseDTO,
  SocialMediaSM,
  SocialMediaFactory
> {
}

export const socialmediaSA = new SocialMediaSA(socialmediaSM, socialmediaFactory, 'SocialMedia');

