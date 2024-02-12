import { GenericSA } from '../../common/service/generic.sa';
import {
    pseudosFactory,
  PseudosFactory,
} from '../../constraint/factory/Pseudos';
import { PseudosDO } from '../../data/do/Pseudos';
// @ts-ignore
import { PseudosRequestDTO } from '../../data/dto/Pseudos/request';
// @ts-ignore
import { PseudosResponseDTO } from '../../data/dto/Pseudos/response';
import { pseudosSM, PseudosSM } from '../metier/Pseudos';

export class PseudosSA extends GenericSA<
  PseudosDO,
  PseudosRequestDTO,
  PseudosResponseDTO,
  PseudosSM,
  PseudosFactory
> {
}

export const pseudosSA = new PseudosSA(pseudosSM, pseudosFactory, 'Pseudos');

