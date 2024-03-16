import { GenericController } from '../../common/infrastructure/generic.controller';
import { sharingNoteDO } from '../../data/do/sharingNote';
// @ts-ignore
import { sharingNoteRequestDTO } from '../../data/dto/sharingNote/request';
// @ts-ignore
import { sharingNoteResponseDTO } from '../../data/dto/sharingNote/response';
import { sharingnoteSA, sharingNoteSA } from '../../service/applicatif/sharingNote';

class sharingNoteController extends GenericController<
  sharingNoteDO,
  sharingNoteRequestDTO,
  sharingNoteResponseDTO,
  sharingNoteSA
> {}

export const sharingnoteController = new sharingNoteController(sharingnoteSA);

