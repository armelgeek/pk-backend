import { GenericSA } from '../../common/service/generic.sa';
import {
    baseinformationFactory,
  BaseInformationFactory,
} from '../../constraint/factory/BaseInformation';
import { BaseInformationDO } from '../../data/do/BaseInformation';
// @ts-ignore
import { BaseInformationRequestDTO } from '../../data/dto/BaseInformation/request';
// @ts-ignore
import { BaseInformationResponseDTO } from '../../data/dto/BaseInformation/response';
import { baseinformationSM, BaseInformationSM } from '../metier/BaseInformation';

export class BaseInformationSA extends GenericSA<
  BaseInformationDO,
  BaseInformationRequestDTO,
  BaseInformationResponseDTO,
  BaseInformationSM,
  BaseInformationFactory
> {
}

export const baseinformationSA = new BaseInformationSA(baseinformationSM, baseinformationFactory, 'BaseInformation');

