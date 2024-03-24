import { GenericController } from '../../common/infrastructure/generic.controller';
import { NoteDO } from '../../data/do/Note';
// @ts-ignore
import { NoteRequestDTO } from '../../data/dto/Note/request';
// @ts-ignore
import { NoteResponseDTO } from '../../data/dto/Note/response';
import { noteSA, NoteSA } from '../../service/applicatif/Note';

class NoteController extends GenericController<
  NoteDO,
  NoteRequestDTO,
  NoteResponseDTO,
  NoteSA
> {}

export const noteController = new NoteController(noteSA);

