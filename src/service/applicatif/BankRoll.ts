import { GenericSA } from '../../common/service/generic.sa';
import {
    bankrollFactory,
  BankRollFactory,
} from '../../constraint/factory/BankRoll';
import { BankRollDO } from '../../data/do/BankRoll';
// @ts-ignore
import { BankRollRequestDTO } from '../../data/dto/BankRoll/request';
// @ts-ignore
import { BankRollResponseDTO } from '../../data/dto/BankRoll/response';
import { bankrollSM, BankRollSM } from '../metier/BankRoll';

export class BankRollSA extends GenericSA<
  BankRollDO,
  BankRollRequestDTO,
  BankRollResponseDTO,
  BankRollSM,
  BankRollFactory
> {
}

export const bankrollSA = new BankRollSA(bankrollSM, bankrollFactory, 'BankRoll');

