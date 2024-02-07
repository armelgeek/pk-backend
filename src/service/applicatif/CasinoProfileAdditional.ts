import { GenericSA } from '../../common/service/generic.sa';
import {
    casinoprofileadditionalFactory,
  CasinoProfileAdditionalFactory,
} from '../../constraint/factory/CasinoProfileAdditional';
import { CasinoProfileAdditionalDO } from '../../data/do/CasinoProfileAdditional';
// @ts-ignore
import { CasinoProfileAdditionalRequestDTO } from '../../data/dto/CasinoProfileAdditional/request';
// @ts-ignore
import { CasinoProfileAdditionalResponseDTO } from '../../data/dto/CasinoProfileAdditional/response';
import { casinoprofileadditionalSM, CasinoProfileAdditionalSM } from '../metier/CasinoProfileAdditional';

export class CasinoProfileAdditionalSA extends GenericSA<
  CasinoProfileAdditionalDO,
  CasinoProfileAdditionalRequestDTO,
  CasinoProfileAdditionalResponseDTO,
  CasinoProfileAdditionalSM,
  CasinoProfileAdditionalFactory
> {
}

export const casinoprofileadditionalSA = new CasinoProfileAdditionalSA(casinoprofileadditionalSM, casinoprofileadditionalFactory, 'CasinoProfileAdditional');

