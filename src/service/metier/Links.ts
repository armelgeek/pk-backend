import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { LinksDO } from '../../data/do/Links';
import { LinksRepository } from '../../repository/Links';

export class LinksSM extends GenericSM<LinksDO, string, LinksRepository> {
}

export const linksSM = new LinksSM(getCustomRepository(LinksRepository));

