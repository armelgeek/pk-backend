import { GenericController } from '../../common/infrastructure/generic.controller';
import { StrategyDO } from '../../data/do/Strategy';
// @ts-ignore
import { StrategyRequestDTO } from '../../data/dto/Strategy/request';
// @ts-ignore
import { StrategyResponseDTO } from '../../data/dto/Strategy/response';
import { strategySA, StrategySA } from '../../service/applicatif/Strategy';

class StrategyController extends GenericController<
  StrategyDO,
  StrategyRequestDTO,
  StrategyResponseDTO,
  StrategySA
> {}

export const strategyController = new StrategyController(strategySA);

