import { GenericController } from '../../common/infrastructure/generic.controller';
import { AlbumDO } from '../../data/do/Album';
// @ts-ignore
import { AlbumRequestDTO } from '../../data/dto/Album/request';
// @ts-ignore
import { AlbumResponseDTO } from '../../data/dto/Album/response';
import { albumSA, AlbumSA } from '../../service/applicatif/Album';

class AlbumController extends GenericController<
  AlbumDO,
  AlbumRequestDTO,
  AlbumResponseDTO,
  AlbumSA
> {}

export const albumController = new AlbumController(albumSA, "Album");

