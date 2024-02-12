import { GenericController } from '../../common/infrastructure/generic.controller';
import { PseudosDO } from '../../data/do/Pseudos';
// @ts-ignore
import { PseudosRequestDTO } from '../../data/dto/Pseudos/request';
// @ts-ignore
import { PseudosResponseDTO } from '../../data/dto/Pseudos/response';
import { pseudosSA, PseudosSA } from '../../service/applicatif/Pseudos';

class PseudosController extends GenericController<
  PseudosDO,
  PseudosRequestDTO,
  PseudosResponseDTO,
  PseudosSA
> {}

export const pseudosController = new PseudosController(pseudosSA);

