import { GenericSA } from '../../common/service/generic.sa';
import {
    gaugeFactory,
  GaugeFactory,
} from '../../constraint/factory/Gauge';
import { GaugeDO } from '../../data/do/Gauge';
// @ts-ignore
import { GaugeRequestDTO } from '../../data/dto/Gauge/request';
// @ts-ignore
import { GaugeResponseDTO } from '../../data/dto/Gauge/response';
import { gaugeSM, GaugeSM } from '../metier/Gauge';

export class GaugeSA extends GenericSA<
  GaugeDO,
  GaugeRequestDTO,
  GaugeResponseDTO,
  GaugeSM,
  GaugeFactory
> {
}

export const gaugeSA = new GaugeSA(gaugeSM, gaugeFactory, 'Gauge');

