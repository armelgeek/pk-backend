import { GenericController } from '../../common/infrastructure/generic.controller';
import { DayDO } from '../../data/do/Day';
// @ts-ignore
import { DayRequestDTO } from '../../data/dto/Day/request';
// @ts-ignore
import { DayResponseDTO } from '../../data/dto/Day/response';
import { daySA, DaySA } from '../../service/applicatif/Day';

class DayController extends GenericController<
  DayDO,
  DayRequestDTO,
  DayResponseDTO,
  DaySA
> {}

export const dayController = new DayController(daySA);

