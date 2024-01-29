import { GenericSA } from '../../common/service/generic.sa';
import {
    parrainageFactory,
  ParrainageFactory,
} from '../../constraint/factory/Parrainage';
import { ParrainageDO } from '../../data/do/Parrainage';
// @ts-ignore
import { ParrainageRequestDTO } from '../../data/dto/Parrainage/request';
// @ts-ignore
import { ParrainageResponseDTO } from '../../data/dto/Parrainage/response';
import { parrainageSM, ParrainageSM } from '../metier/Parrainage';

export class ParrainageSA extends GenericSA<
  ParrainageDO,
  ParrainageRequestDTO,
  ParrainageResponseDTO,
  ParrainageSM,
  ParrainageFactory
> {
}

export const parrainageSA = new ParrainageSA(parrainageSM, parrainageFactory, 'Parrainage');

