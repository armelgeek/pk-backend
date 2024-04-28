import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { MediaDO } from '../../data/do/Media';
import { MediaRepository } from '../../repository/Media';

export class MediaSM extends GenericSM<MediaDO, string, MediaRepository> {
}

export const mediaSM = new MediaSM(getCustomRepository(MediaRepository));

