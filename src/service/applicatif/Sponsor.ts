import { GenericSA } from '../../common/service/generic.sa';
import {
    sponsorFactory,
  SponsorFactory,
} from '../../constraint/factory/Sponsor';
import { SponsorDO } from '../../data/do/Sponsor';
// @ts-ignore
import { SponsorRequestDTO } from '../../data/dto/Sponsor/request';
// @ts-ignore
import { SponsorResponseDTO } from '../../data/dto/Sponsor/response';
import { sponsorSM, SponsorSM } from '../metier/Sponsor';

export class SponsorSA extends GenericSA<
  SponsorDO,
  SponsorRequestDTO,
  SponsorResponseDTO,
  SponsorSM,
  SponsorFactory
> {
}

export const sponsorSA = new SponsorSA(sponsorSM, sponsorFactory, 'Sponsor');

