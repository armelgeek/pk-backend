import { GenericController } from '../../common/infrastructure/generic.controller';
import { GaugeDO } from '../../data/do/Gauge';
// @ts-ignore
import { GaugeRequestDTO } from '../../data/dto/Gauge/request';
// @ts-ignore
import { GaugeResponseDTO } from '../../data/dto/Gauge/response';
import { gaugeSA, GaugeSA } from '../../service/applicatif/Gauge';

class GaugeController extends GenericController<
  GaugeDO,
  GaugeRequestDTO,
  GaugeResponseDTO,
  GaugeSA
> {}

export const gaugeController = new GaugeController(gaugeSA);

