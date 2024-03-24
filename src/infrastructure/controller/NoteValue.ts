import { GenericController } from '../../common/infrastructure/generic.controller';
import { NoteValueDO } from '../../data/do/NoteValue';
// @ts-ignore
import { NoteValueRequestDTO } from '../../data/dto/NoteValue/request';
// @ts-ignore
import { NoteValueResponseDTO } from '../../data/dto/NoteValue/response';
import { notevalueSA, NoteValueSA } from '../../service/applicatif/NoteValue';

class NoteValueController extends GenericController<
  NoteValueDO,
  NoteValueRequestDTO,
  NoteValueResponseDTO,
  NoteValueSA
> {}

export const notevalueController = new NoteValueController(notevalueSA);

