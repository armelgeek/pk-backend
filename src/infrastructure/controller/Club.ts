import { GenericController } from '../../common/infrastructure/generic.controller';
import { ClubDO } from '../../data/do/Club';
// @ts-ignore
import { ClubRequestDTO } from '../../data/dto/Club/request';
// @ts-ignore
import { ClubResponseDTO } from '../../data/dto/Club/response';
import { clubSA, ClubSA } from '../../service/applicatif/Club';

class ClubController extends GenericController<
  ClubDO,
  ClubRequestDTO,
  ClubResponseDTO,
  ClubSA
> {}

export const clubController = new ClubController(clubSA);

