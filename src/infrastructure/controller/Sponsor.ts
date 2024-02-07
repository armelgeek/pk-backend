import { GenericController } from '../../common/infrastructure/generic.controller';
import { SponsorDO } from '../../data/do/Sponsor';
// @ts-ignore
import { SponsorRequestDTO } from '../../data/dto/Sponsor/request';
// @ts-ignore
import { SponsorResponseDTO } from '../../data/dto/Sponsor/response';
import { sponsorSA, SponsorSA } from '../../service/applicatif/Sponsor';

class SponsorController extends GenericController<
  SponsorDO,
  SponsorRequestDTO,
  SponsorResponseDTO,
  SponsorSA
> {}

export const sponsorController = new SponsorController(sponsorSA);

