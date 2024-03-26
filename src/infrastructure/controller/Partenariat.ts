import { GenericController } from '../../common/infrastructure/generic.controller';
import { PartenariatDO } from '../../data/do/Partenariat';
// @ts-ignore
import { PartenariatRequestDTO } from '../../data/dto/Partenariat/request';
// @ts-ignore
import { PartenariatResponseDTO } from '../../data/dto/Partenariat/response';
import { partenariatSA, PartenariatSA } from '../../service/applicatif/Partenariat';

class PartenariatController extends GenericController<
  PartenariatDO,
  PartenariatRequestDTO,
  PartenariatResponseDTO,
  PartenariatSA
> {}

export const partenariatController = new PartenariatController(partenariatSA);

