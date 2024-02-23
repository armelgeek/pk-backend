import { GenericController } from '../../common/infrastructure/generic.controller';
import { ConfindialityDO } from '../../data/do/Confindiality';
// @ts-ignore
import { ConfindialityRequestDTO } from '../../data/dto/Confindiality/request';
// @ts-ignore
import { ConfindialityResponseDTO } from '../../data/dto/Confindiality/response';
import { confindialitySA, ConfindialitySA } from '../../service/applicatif/Confindiality';

class ConfindialityController extends GenericController<
  ConfindialityDO,
  ConfindialityRequestDTO,
  ConfindialityResponseDTO,
  ConfindialitySA
> {}

export const confindialityController = new ConfindialityController(confindialitySA);

