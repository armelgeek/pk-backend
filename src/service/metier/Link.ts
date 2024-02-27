import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { LinkDO } from '../../data/do/Link';
import { LinkRepository } from '../../repository/Link';

export class LinkSM extends GenericSM<LinkDO, string, LinkRepository> {
}

export const linkSM = new LinkSM(getCustomRepository(LinkRepository));

