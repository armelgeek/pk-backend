import { GenericController } from '../../common/infrastructure/generic.controller';
import { ParrainageDO } from '../../data/do/Parrainage';
// @ts-ignore
import { ParrainageRequestDTO } from '../../data/dto/Parrainage/request';
// @ts-ignore
import { ParrainageResponseDTO } from '../../data/dto/Parrainage/response';
import { parrainageSA, ParrainageSA } from '../../service/applicatif/Parrainage';

class ParrainageController extends GenericController<
  ParrainageDO,
  ParrainageRequestDTO,
  ParrainageResponseDTO,
  ParrainageSA
> {}

export const parrainageController = new ParrainageController(parrainageSA);

