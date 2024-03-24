import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { NoteDO } from '../../data/do/Note';
import { NoteRepository } from '../../repository/Note';

export class NoteSM extends GenericSM<NoteDO, string, NoteRepository> {
}

export const noteSM = new NoteSM(getCustomRepository(NoteRepository));

