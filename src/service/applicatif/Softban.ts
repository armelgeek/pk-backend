import { GenericSA } from '../../common/service/generic.sa';
import {
    softbanFactory,
  SoftbanFactory,
} from '../../constraint/factory/Softban';
import { SoftbanDO } from '../../data/do/Softban';
// @ts-ignore
import { SoftbanRequestDTO } from '../../data/dto/Softban/request';
// @ts-ignore
import { SoftbanResponseDTO } from '../../data/dto/Softban/response';
import { softbanSM, SoftbanSM } from '../metier/Softban';

export class SoftbanSA extends GenericSA<
  SoftbanDO,
  SoftbanRequestDTO,
  SoftbanResponseDTO,
  SoftbanSM,
  SoftbanFactory
> {
}

export const softbanSA = new SoftbanSA(softbanSM, softbanFactory, 'Softban');

