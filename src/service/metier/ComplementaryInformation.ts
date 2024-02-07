import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { ComplementaryInformationDO } from '../../data/do/ComplementaryInformation';
import { ComplementaryInformationRepository } from '../../repository/ComplementaryInformation';

export class ComplementaryInformationSM extends GenericSM<ComplementaryInformationDO, string, ComplementaryInformationRepository> {
}

export const complementaryinformationSM = new ComplementaryInformationSM(getCustomRepository(ComplementaryInformationRepository));

