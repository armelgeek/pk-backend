import { GenericSA } from '../../common/service/generic.sa';
import {
    sharingnoteFactory,
  SharingNoteFactory,
} from '../../constraint/factory/SharingNote';
import { SharingNoteDO } from '../../data/do/SharingNote';

// @ts-ignore
import { SharingNoteRequestDTO } from '../../data/dto/SharingNote/request';
// @ts-ignore
import { SharingNoteResponseDTO } from '../../data/dto/SharingNote/response';
import { sharingnoteSM, SharingNoteSM } from '../metier/SharingNote';

export class SharingNoteSA extends GenericSA<
  SharingNoteDO,
  SharingNoteRequestDTO,
  SharingNoteResponseDTO,
  SharingNoteSM,
  SharingNoteFactory
> {
}

export const sharingNoteSA = new SharingNoteSA(sharingnoteSM, sharingnoteFactory, 'SharingNote');
