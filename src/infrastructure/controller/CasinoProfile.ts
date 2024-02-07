import { GenericController } from '../../common/infrastructure/generic.controller';
import { CasinoProfileDO } from '../../data/do/CasinoProfile';
// @ts-ignore
import { CasinoProfileRequestDTO } from '../../data/dto/CasinoProfile/request';
// @ts-ignore
import { CasinoProfileResponseDTO } from '../../data/dto/CasinoProfile/response';
import { casinoprofileSA, CasinoProfileSA } from '../../service/applicatif/CasinoProfile';

class CasinoProfileController extends GenericController<
  CasinoProfileDO,
  CasinoProfileRequestDTO,
  CasinoProfileResponseDTO,
  CasinoProfileSA
> {}

export const casinoprofileController = new CasinoProfileController(casinoprofileSA);

