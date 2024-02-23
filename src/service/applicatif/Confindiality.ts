import { GenericSA } from '../../common/service/generic.sa';
import {
    confindialityFactory,
  ConfindialityFactory,
} from '../../constraint/factory/Confindiality';
import { ConfindialityDO } from '../../data/do/Confindiality';
// @ts-ignore
import { ConfindialityRequestDTO } from '../../data/dto/Confindiality/request';
// @ts-ignore
import { ConfindialityResponseDTO } from '../../data/dto/Confindiality/response';
import { confindialitySM, ConfindialitySM } from '../metier/Confindiality';

export class ConfindialitySA extends GenericSA<
  ConfindialityDO,
  ConfindialityRequestDTO,
  ConfindialityResponseDTO,
  ConfindialitySM,
  ConfindialityFactory
> {
}

export const confindialitySA = new ConfindialitySA(confindialitySM, confindialityFactory, 'Confindiality');

