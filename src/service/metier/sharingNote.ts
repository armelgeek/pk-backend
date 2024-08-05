import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { SharingNoteDO } from '../../data/do/SharingNote';
import { SharingNoteRepository } from '../../repository/SharingNote';

export class SharingNoteSM extends GenericSM<SharingNoteDO, string, SharingNoteRepository> {
}

export const sharingnoteSM = new SharingNoteSM(getCustomRepository(SharingNoteRepository));

