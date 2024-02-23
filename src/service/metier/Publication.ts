import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { PublicationDO } from '../../data/do/Publication';
import { PublicationRepository } from '../../repository/Publication';

export class PublicationSM extends GenericSM<PublicationDO, string, PublicationRepository> {
}

export const publicationSM = new PublicationSM(getCustomRepository(PublicationRepository));

