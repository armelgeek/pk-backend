import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { SoftbanDO } from '../../data/do/Softban';
import { SoftbanRepository } from '../../repository/Softban';

export class SoftbanSM extends GenericSM<SoftbanDO, string, SoftbanRepository> {
}

export const softbanSM = new SoftbanSM(getCustomRepository(SoftbanRepository));

