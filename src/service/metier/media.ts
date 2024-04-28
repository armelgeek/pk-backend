import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { mediaDO } from '../../data/do/media';
import { mediaRepository } from '../../repository/media';

export class mediaSM extends GenericSM<mediaDO, string, mediaRepository> {
}

export const mediaSM = new mediaSM(getCustomRepository(mediaRepository));

