import { GenericController } from '../../common/infrastructure/generic.controller';
import { LevelDO } from '../../data/do/Level';
// @ts-ignore
import { LevelRequestDTO } from '../../data/dto/Level/request';
// @ts-ignore
import { LevelResponseDTO } from '../../data/dto/Level/response';
import { levelSA, LevelSA } from '../../service/applicatif/Level';

class LevelController extends GenericController<
  LevelDO,
  LevelRequestDTO,
  LevelResponseDTO,
  LevelSA
> {}

export const levelController = new LevelController(levelSA);

