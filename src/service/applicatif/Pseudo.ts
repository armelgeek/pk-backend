import { GenericSA } from '../../common/service/generic.sa';
import {
    pseudoFactory,
  PseudoFactory,
} from '../../constraint/factory/Pseudo';
import { PseudoDO } from '../../data/do/Pseudo';
// @ts-ignore
import { PseudoRequestDTO } from '../../data/dto/Pseudo/request';
// @ts-ignore
import { PseudoResponseDTO } from '../../data/dto/Pseudo/response';
import { pseudoSM, PseudoSM } from '../metier/Pseudo';

export class PseudoSA extends GenericSA<
  PseudoDO,
  PseudoRequestDTO,
  PseudoResponseDTO,
  PseudoSM,
  PseudoFactory
> {
}

export const pseudoSA = new PseudoSA(pseudoSM, pseudoFactory, 'Pseudo');

