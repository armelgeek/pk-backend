import { GenericSA } from '../../common/service/generic.sa';
import {
    codeparrainFactory,
  CodeParrainFactory,
} from '../../constraint/factory/CodeParrain';
import { CodeParrainDO } from '../../data/do/CodeParrain';
// @ts-ignore
import { CodeParrainRequestDTO } from '../../data/dto/CodeParrain/request';
// @ts-ignore
import { CodeParrainResponseDTO } from '../../data/dto/CodeParrain/response';
import { codeparrainSM, CodeParrainSM } from '../metier/CodeParrain';

export class CodeParrainSA extends GenericSA<
  CodeParrainDO,
  CodeParrainRequestDTO,
  CodeParrainResponseDTO,
  CodeParrainSM,
  CodeParrainFactory
> {
}

export const codeparrainSA = new CodeParrainSA(codeparrainSM, codeparrainFactory, 'CodeParrain');

