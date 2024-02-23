import { GenericSA } from '../../common/service/generic.sa';
import {
    gametypeFactory,
  GameTypeFactory,
} from '../../constraint/factory/GameType';
import { GameTypeDO } from '../../data/do/GameType';
// @ts-ignore
import { GameTypeRequestDTO } from '../../data/dto/GameType/request';
// @ts-ignore
import { GameTypeResponseDTO } from '../../data/dto/GameType/response';
import { gametypeSM, GameTypeSM } from '../metier/GameType';

export class GameTypeSA extends GenericSA<
  GameTypeDO,
  GameTypeRequestDTO,
  GameTypeResponseDTO,
  GameTypeSM,
  GameTypeFactory
> {
}

export const gametypeSA = new GameTypeSA(gametypeSM, gametypeFactory, 'GameType');

