import { GenericSA } from '../../common/service/generic.sa';
import {
    partenariatFactory,
  PartenariatFactory,
} from '../../constraint/factory/Partenariat';
import { PartenariatDO } from '../../data/do/Partenariat';
// @ts-ignore
import { PartenariatRequestDTO } from '../../data/dto/Partenariat/request';
// @ts-ignore
import { PartenariatResponseDTO } from '../../data/dto/Partenariat/response';
import { partenariatSM, PartenariatSM } from '../metier/Partenariat';

export class PartenariatSA extends GenericSA<
  PartenariatDO,
  PartenariatRequestDTO,
  PartenariatResponseDTO,
  PartenariatSM,
  PartenariatFactory
> {
}

export const partenariatSA = new PartenariatSA(partenariatSM, partenariatFactory, 'Partenariat');

