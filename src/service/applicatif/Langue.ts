import { GenericSA } from '../../common/service/generic.sa';
import {
    langueFactory,
  LangueFactory,
} from '../../constraint/factory/Langue';
import { LangueDO } from '../../data/do/Langue';
// @ts-ignore
import { LangueRequestDTO } from '../../data/dto/Langue/request';
// @ts-ignore
import { LangueResponseDTO } from '../../data/dto/Langue/response';
import { langueSM, LangueSM } from '../metier/Langue';

export class LangueSA extends GenericSA<
  LangueDO,
  LangueRequestDTO,
  LangueResponseDTO,
  LangueSM,
  LangueFactory
> {
}

export const langueSA = new LangueSA(langueSM, langueFactory, 'Langue');

