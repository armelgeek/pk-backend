import { GenericController } from '../../common/infrastructure/generic.controller';
import { CasinoProfileAdditionalDO } from '../../data/do/CasinoProfileAdditional';
// @ts-ignore
import { CasinoProfileAdditionalRequestDTO } from '../../data/dto/CasinoProfileAdditional/request';
// @ts-ignore
import { CasinoProfileAdditionalResponseDTO } from '../../data/dto/CasinoProfileAdditional/response';
import { casinoprofileadditionalSA, CasinoProfileAdditionalSA } from '../../service/applicatif/CasinoProfileAdditional';

class CasinoProfileAdditionalController extends GenericController<
  CasinoProfileAdditionalDO,
  CasinoProfileAdditionalRequestDTO,
  CasinoProfileAdditionalResponseDTO,
  CasinoProfileAdditionalSA
> {}

export const casinoprofileadditionalController = new CasinoProfileAdditionalController(casinoprofileadditionalSA);

