import { GenericSA } from '../../common/service/generic.sa';
import {
    avisFactory,
  AvisFactory,
} from '../../constraint/factory/Avis';
import { AvisDO } from '../../data/do/Avis';
// @ts-ignore
import { AvisRequestDTO } from '../../data/dto/Avis/request';
// @ts-ignore
import { AvisResponseDTO } from '../../data/dto/Avis/response';
import { avisSM, AvisSM } from '../metier/Avis';

export class AvisSA extends GenericSA<
  AvisDO,
  AvisRequestDTO,
  AvisResponseDTO,
  AvisSM,
  AvisFactory
> {
}

export const avisSA = new AvisSA(avisSM, avisFactory, 'Avis');

