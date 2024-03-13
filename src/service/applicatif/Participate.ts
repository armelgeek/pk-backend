import { GenericSA } from '../../common/service/generic.sa';
import {
    participateFactory,
  ParticipateFactory,
} from '../../constraint/factory/Participate';
import { ParticipateDO } from '../../data/do/Participate';
// @ts-ignore
import { ParticipateRequestDTO } from '../../data/dto/Participate/request';
// @ts-ignore
import { ParticipateResponseDTO } from '../../data/dto/Participate/response';
import { participateSM, ParticipateSM } from '../metier/Participate';

export class ParticipateSA extends GenericSA<
  ParticipateDO,
  ParticipateRequestDTO,
  ParticipateResponseDTO,
  ParticipateSM,
  ParticipateFactory
> {
}

export const participateSA = new ParticipateSA(participateSM, participateFactory, 'Participate');

