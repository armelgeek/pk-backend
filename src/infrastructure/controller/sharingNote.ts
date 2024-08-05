import { GenericController } from '../../common/infrastructure/generic.controller';
import { SharingNoteDO } from '../../data/do/SharingNote';
// @ts-ignore
import { sharingNoteRequestDTO } from '../../data/dto/sharingNote/request';
// @ts-ignore
import { sharingNoteResponseDTO } from '../../data/dto/sharingNote/response';
import { SharingNoteSA, sharingNoteSA } from '../../service/applicatif/sharingNote';

class sharingNoteController extends GenericController<
  SharingNoteDO,
  sharingNoteRequestDTO,
  sharingNoteResponseDTO,
  SharingNoteSA
> {}

export const sharingnoteController = new sharingNoteController(sharingNoteSA);

