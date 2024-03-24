import { GenericSA } from '../../common/service/generic.sa';
import {
    strategyFactory,
  StrategyFactory,
} from '../../constraint/factory/Strategy';
import { StrategyDO } from '../../data/do/Strategy';
// @ts-ignore
import { StrategyRequestDTO } from '../../data/dto/Strategy/request';
// @ts-ignore
import { StrategyResponseDTO } from '../../data/dto/Strategy/response';
import { strategySM, StrategySM } from '../metier/Strategy';

export class StrategySA extends GenericSA<
  StrategyDO,
  StrategyRequestDTO,
  StrategyResponseDTO,
  StrategySM,
  StrategyFactory
> {
}

export const strategySA = new StrategySA(strategySM, strategyFactory, 'Strategy');

