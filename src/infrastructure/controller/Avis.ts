import { GenericController } from '../../common/infrastructure/generic.controller';
import { AvisDO } from '../../data/do/Avis';
// @ts-ignore
import { AvisRequestDTO } from '../../data/dto/Avis/request';
// @ts-ignore
import { AvisResponseDTO } from '../../data/dto/Avis/response';
import { avisSA, AvisSA } from '../../service/applicatif/Avis';

class AvisController extends GenericController<
  AvisDO,
  AvisRequestDTO,
  AvisResponseDTO,
  AvisSA
> {}

export const avisController = new AvisController(avisSA);

