import { GenericSA } from '../../common/service/generic.sa';
import {
    casinoprofileFactory,
  CasinoProfileFactory,
} from '../../constraint/factory/CasinoProfile';
import { CasinoProfileDO } from '../../data/do/CasinoProfile';
// @ts-ignore
import { CasinoProfileRequestDTO } from '../../data/dto/CasinoProfile/request';
// @ts-ignore
import { CasinoProfileResponseDTO } from '../../data/dto/CasinoProfile/response';
import { casinoprofileSM, CasinoProfileSM } from '../metier/CasinoProfile';

export class CasinoProfileSA extends GenericSA<
  CasinoProfileDO,
  CasinoProfileRequestDTO,
  CasinoProfileResponseDTO,
  CasinoProfileSM,
  CasinoProfileFactory
> {
}

export const casinoprofileSA = new CasinoProfileSA(casinoprofileSM, casinoprofileFactory, 'CasinoProfile');

