import { GenericController } from '../../common/infrastructure/generic.controller';
import { GameTypeDO } from '../../data/do/GameType';
// @ts-ignore
import { GameTypeRequestDTO } from '../../data/dto/GameType/request';
// @ts-ignore
import { GameTypeResponseDTO } from '../../data/dto/GameType/response';
import { gametypeSA, GameTypeSA } from '../../service/applicatif/GameType';

class GameTypeController extends GenericController<
  GameTypeDO,
  GameTypeRequestDTO,
  GameTypeResponseDTO,
  GameTypeSA
> {}

export const gametypeController = new GameTypeController(gametypeSA);

