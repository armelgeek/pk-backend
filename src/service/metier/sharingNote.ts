import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { sharingNoteDO } from '../../data/do/sharingNote';
import { sharingNoteRepository } from '../../repository/sharingNote';

export class sharingNoteSM extends GenericSM<sharingNoteDO, string, sharingNoteRepository> {
}

export const sharingnoteSM = new sharingNoteSM(getCustomRepository(sharingNoteRepository));

