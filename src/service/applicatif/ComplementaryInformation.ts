import { GenericSA } from '../../common/service/generic.sa';
import {
    complementaryinformationFactory,
  ComplementaryInformationFactory,
} from '../../constraint/factory/ComplementaryInformation';
import { ComplementaryInformationDO } from '../../data/do/ComplementaryInformation';
// @ts-ignore
import { ComplementaryInformationRequestDTO } from '../../data/dto/ComplementaryInformation/request';
// @ts-ignore
import { ComplementaryInformationResponseDTO } from '../../data/dto/ComplementaryInformation/response';
import { complementaryinformationSM, ComplementaryInformationSM } from '../metier/ComplementaryInformation';

export class ComplementaryInformationSA extends GenericSA<
  ComplementaryInformationDO,
  ComplementaryInformationRequestDTO,
  ComplementaryInformationResponseDTO,
  ComplementaryInformationSM,
  ComplementaryInformationFactory
> {
}

export const complementaryinformationSA = new ComplementaryInformationSA(complementaryinformationSM, complementaryinformationFactory, 'ComplementaryInformation');

