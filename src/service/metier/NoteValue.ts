import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { NoteValueDO } from '../../data/do/NoteValue';
import { NoteValueRepository } from '../../repository/NoteValue';

export class NoteValueSM extends GenericSM<NoteValueDO, string, NoteValueRepository> {
}

export const notevalueSM = new NoteValueSM(getCustomRepository(NoteValueRepository));

