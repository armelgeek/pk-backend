import { GenericSA } from '../../common/service/generic.sa';
import {
    albumFactory,
  AlbumFactory,
} from '../../constraint/factory/Album';
import { AlbumDO } from '../../data/do/Album';
// @ts-ignore
import { AlbumRequestDTO } from '../../data/dto/Album/request';
// @ts-ignore
import { AlbumResponseDTO } from '../../data/dto/Album/response';
import { albumSM, AlbumSM } from '../metier/Album';

export class AlbumSA extends GenericSA<
  AlbumDO,
  AlbumRequestDTO,
  AlbumResponseDTO,
  AlbumSM,
  AlbumFactory
> {
}

export const albumSA = new AlbumSA(albumSM, albumFactory, 'Album');

