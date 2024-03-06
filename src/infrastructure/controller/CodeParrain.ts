import { GenericController } from '../../common/infrastructure/generic.controller';
import { CodeParrainDO } from '../../data/do/CodeParrain';
// @ts-ignore
import { CodeParrainRequestDTO } from '../../data/dto/CodeParrain/request';
// @ts-ignore
import { CodeParrainResponseDTO } from '../../data/dto/CodeParrain/response';
import { codeparrainSA, CodeParrainSA } from '../../service/applicatif/CodeParrain';

class CodeParrainController extends GenericController<
  CodeParrainDO,
  CodeParrainRequestDTO,
  CodeParrainResponseDTO,
  CodeParrainSA
> {}

export const codeparrainController = new CodeParrainController(codeparrainSA);

