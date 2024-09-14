import { GenericController } from '../../common/infrastructure/generic.controller';
import { SoftbanDO } from '../../data/do/Softban';
// @ts-ignore
import { SoftbanRequestDTO } from '../../data/dto/Softban/request';
// @ts-ignore
import { SoftbanResponseDTO } from '../../data/dto/Softban/response';
import { softbanSA, SoftbanSA } from '../../service/applicatif/Softban';

class SoftbanController extends GenericController<
  SoftbanDO,
  SoftbanRequestDTO,
  SoftbanResponseDTO,
  SoftbanSA
> {}

export const softbanController = new SoftbanController(softbanSA);

