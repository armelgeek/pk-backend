import { GenericSA } from '../../common/service/generic.sa';
import {
    levelFactory,
  LevelFactory,
} from '../../constraint/factory/Level';
import { LevelDO } from '../../data/do/Level';
// @ts-ignore
import { LevelRequestDTO } from '../../data/dto/Level/request';
// @ts-ignore
import { LevelResponseDTO } from '../../data/dto/Level/response';
import { levelSM, LevelSM } from '../metier/Level';

export class LevelSA extends GenericSA<
  LevelDO,
  LevelRequestDTO,
  LevelResponseDTO,
  LevelSM,
  LevelFactory
> {
}

export const levelSA = new LevelSA(levelSM, levelFactory, 'Level');

