import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { PageDO } from '../../data/do/Page';
import { PageRepository } from '../../repository/Page';

export class PageSM extends GenericSM<PageDO, string, PageRepository> {
}

export const pageSM = new PageSM(getCustomRepository(PageRepository));

