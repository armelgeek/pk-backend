import { GenericSA } from '../../common/service/generic.sa';
import {
    sharingnoteFactory,
  sharingNoteFactory,
} from '../../constraint/factory/sharingNote';
import { sharingNoteDO } from '../../data/do/sharingNote';
// @ts-ignore
import { sharingNoteRequestDTO } from '../../data/dto/sharingNote/request';
// @ts-ignore
import { sharingNoteResponseDTO } from '../../data/dto/sharingNote/response';
import { sharingnoteSM, sharingNoteSM } from '../metier/sharingNote';

export class sharingNoteSA extends GenericSA<
  sharingNoteDO,
  sharingNoteRequestDTO,
  sharingNoteResponseDTO,
  sharingNoteSM,
  sharingNoteFactory
> {
}

export const sharingnoteSA = new sharingNoteSA(sharingnoteSM, sharingnoteFactory, 'sharingNote');

