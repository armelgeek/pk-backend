import { GenericSA } from '../../common/service/generic.sa';
import {
    noteFactory,
  NoteFactory,
} from '../../constraint/factory/Note';
import { NoteDO } from '../../data/do/Note';
// @ts-ignore
import { NoteRequestDTO } from '../../data/dto/Note/request';
// @ts-ignore
import { NoteResponseDTO } from '../../data/dto/Note/response';
import { noteSM, NoteSM } from '../metier/Note';

export class NoteSA extends GenericSA<
  NoteDO,
  NoteRequestDTO,
  NoteResponseDTO,
  NoteSM,
  NoteFactory
> {
}

export const noteSA = new NoteSA(noteSM, noteFactory, 'Note');

