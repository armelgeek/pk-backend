import { GenericController } from '../../common/infrastructure/generic.controller';
import { RestrictionDO } from '../../data/do/Restriction';
// @ts-ignore
import { RestrictionRequestDTO } from '../../data/dto/Restriction/request';
// @ts-ignore
import { RestrictionResponseDTO } from '../../data/dto/Restriction/response';
import { restrictionSA, RestrictionSA } from '../../service/applicatif/Restriction';

class RestrictionController extends GenericController<
  RestrictionDO,
  RestrictionRequestDTO,
  RestrictionResponseDTO,
  RestrictionSA
> {}

export const restrictionController = new RestrictionController(restrictionSA);

