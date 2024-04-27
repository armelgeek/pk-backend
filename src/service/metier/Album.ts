import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { AlbumDO } from '../../data/do/Album';
import { AlbumRepository } from '../../repository/Album';

export class AlbumSM extends GenericSM<AlbumDO, string, AlbumRepository> {
}

export const albumSM = new AlbumSM(getCustomRepository(AlbumRepository));

