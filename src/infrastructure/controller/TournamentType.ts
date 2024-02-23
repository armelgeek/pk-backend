import { GenericController } from '../../common/infrastructure/generic.controller';
import { TournamentTypeDO } from '../../data/do/TournamentType';
// @ts-ignore
import { TournamentTypeRequestDTO } from '../../data/dto/TournamentType/request';
// @ts-ignore
import { TournamentTypeResponseDTO } from '../../data/dto/TournamentType/response';
import { tournamenttypeSA, TournamentTypeSA } from '../../service/applicatif/TournamentType';

class TournamentTypeController extends GenericController<
  TournamentTypeDO,
  TournamentTypeRequestDTO,
  TournamentTypeResponseDTO,
  TournamentTypeSA
> {}

export const tournamenttypeController = new TournamentTypeController(tournamenttypeSA);

