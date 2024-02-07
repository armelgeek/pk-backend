import { GenericController } from '../../common/infrastructure/generic.controller';
import { ComplementaryInformationDO } from '../../data/do/ComplementaryInformation';
// @ts-ignore
import { ComplementaryInformationRequestDTO } from '../../data/dto/ComplementaryInformation/request';
// @ts-ignore
import { ComplementaryInformationResponseDTO } from '../../data/dto/ComplementaryInformation/response';
import { complementaryinformationSA, ComplementaryInformationSA } from '../../service/applicatif/ComplementaryInformation';

class ComplementaryInformationController extends GenericController<
  ComplementaryInformationDO,
  ComplementaryInformationRequestDTO,
  ComplementaryInformationResponseDTO,
  ComplementaryInformationSA
> {}

export const complementaryinformationController = new ComplementaryInformationController(complementaryinformationSA);

