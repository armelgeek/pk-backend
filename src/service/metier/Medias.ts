import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { MediasDO } from '../../data/do/Medias';
import { MediasRepository } from '../../repository/Medias';

export class MediasSM extends GenericSM<MediasDO, string, MediasRepository> {
}

export const mediasSM = new MediasSM(getCustomRepository(MediasRepository));

