import { GenericController } from '../../common/infrastructure/generic.controller';
import { PseudoDO } from '../../data/do/Pseudo';
// @ts-ignore
import { PseudoRequestDTO } from '../../data/dto/Pseudo/request';
// @ts-ignore
import { PseudoResponseDTO } from '../../data/dto/Pseudo/response';
import { pseudoSA, PseudoSA } from '../../service/applicatif/Pseudo';

class PseudoController extends GenericController<
  PseudoDO,
  PseudoRequestDTO,
  PseudoResponseDTO,
  PseudoSA
> {}

export const pseudoController = new PseudoController(pseudoSA);

