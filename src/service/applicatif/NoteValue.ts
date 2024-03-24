import { GenericSA } from '../../common/service/generic.sa';
import {
    notevalueFactory,
  NoteValueFactory,
} from '../../constraint/factory/NoteValue';
import { NoteValueDO } from '../../data/do/NoteValue';
// @ts-ignore
import { NoteValueRequestDTO } from '../../data/dto/NoteValue/request';
// @ts-ignore
import { NoteValueResponseDTO } from '../../data/dto/NoteValue/response';
import { notevalueSM, NoteValueSM } from '../metier/NoteValue';

export class NoteValueSA extends GenericSA<
  NoteValueDO,
  NoteValueRequestDTO,
  NoteValueResponseDTO,
  NoteValueSM,
  NoteValueFactory
> {
}

export const notevalueSA = new NoteValueSA(notevalueSM, notevalueFactory, 'NoteValue');

