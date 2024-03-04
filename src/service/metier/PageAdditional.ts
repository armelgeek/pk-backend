import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { PageAdditionalDO } from '../../data/do/PageAdditional';
import { PageAdditionalRepository } from '../../repository/PageAdditional';

export class PageAdditionalSM extends GenericSM<PageAdditionalDO, string, PageAdditionalRepository> {
}

export const pageadditionalSM = new PageAdditionalSM(getCustomRepository(PageAdditionalRepository));

