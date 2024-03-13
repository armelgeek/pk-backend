import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { BankRollDO } from '../../data/do/BankRoll';
import { BankRollRepository } from '../../repository/BankRoll';

export class BankRollSM extends GenericSM<BankRollDO, string, BankRollRepository> {
}

export const bankrollSM = new BankRollSM(getCustomRepository(BankRollRepository));

