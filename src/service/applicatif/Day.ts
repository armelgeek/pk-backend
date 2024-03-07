import { GenericSA } from '../../common/service/generic.sa';
import {
    dayFactory,
  DayFactory,
} from '../../constraint/factory/Day';
import { DayDO } from '../../data/do/Day';
// @ts-ignore
import { DayRequestDTO } from '../../data/dto/Day/request';
// @ts-ignore
import { DayResponseDTO } from '../../data/dto/Day/response';
import { daySM, DaySM } from '../metier/Day';

export class DaySA extends GenericSA<
  DayDO,
  DayRequestDTO,
  DayResponseDTO,
  DaySM,
  DayFactory
> {
}

export const daySA = new DaySA(daySM, dayFactory, 'Day');

