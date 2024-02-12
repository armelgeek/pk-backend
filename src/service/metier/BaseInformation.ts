import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { BaseInformationDO } from '../../data/do/BaseInformation';
import { BaseInformationRepository } from '../../repository/BaseInformation';

export class BaseInformationSM extends GenericSM<BaseInformationDO, string, BaseInformationRepository> {
}

export const baseinformationSM = new BaseInformationSM(getCustomRepository(BaseInformationRepository));

