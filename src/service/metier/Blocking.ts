import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { BlockingDO } from '../../data/do/Blocking';
import { BlockingRepository } from '../../repository/Blocking';

export class BlockingSM extends GenericSM<BlockingDO, string, BlockingRepository> {
}

export const blockingSM = new BlockingSM(getCustomRepository(BlockingRepository));

