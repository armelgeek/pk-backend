import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { CodeParrainDO } from '../../data/do/CodeParrain';
import { CodeParrainRepository } from '../../repository/CodeParrain';

export class CodeParrainSM extends GenericSM<CodeParrainDO, string, CodeParrainRepository> {
}

export const codeparrainSM = new CodeParrainSM(getCustomRepository(CodeParrainRepository));

