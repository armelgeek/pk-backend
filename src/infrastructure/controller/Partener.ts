import { GenericController } from '../../common/infrastructure/generic.controller';
import { PartenerDO } from '../../data/do/Partener';
// @ts-ignore
import { PartenerRequestDTO } from '../../data/dto/Partener/request';
// @ts-ignore
import { PartenerResponseDTO } from '../../data/dto/Partener/response';
import { partenerSA, PartenerSA } from '../../service/applicatif/Partener';

class PartenerController extends GenericController<
  PartenerDO,
  PartenerRequestDTO,
  PartenerResponseDTO,
  PartenerSA
> {}

export const partenerController = new PartenerController(partenerSA);

