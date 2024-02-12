import { GenericController } from '../../common/infrastructure/generic.controller';
import { BaseInformationDO } from '../../data/do/BaseInformation';
// @ts-ignore
import { BaseInformationRequestDTO } from '../../data/dto/BaseInformation/request';
// @ts-ignore
import { BaseInformationResponseDTO } from '../../data/dto/BaseInformation/response';
import { baseinformationSA, BaseInformationSA } from '../../service/applicatif/BaseInformation';

class BaseInformationController extends GenericController<
  BaseInformationDO,
  BaseInformationRequestDTO,
  BaseInformationResponseDTO,
  BaseInformationSA
> {}

export const baseinformationController = new BaseInformationController(baseinformationSA);

