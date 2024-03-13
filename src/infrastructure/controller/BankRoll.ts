import { GenericController } from '../../common/infrastructure/generic.controller';
import { BankRollDO } from '../../data/do/BankRoll';
// @ts-ignore
import { BankRollRequestDTO } from '../../data/dto/BankRoll/request';
// @ts-ignore
import { BankRollResponseDTO } from '../../data/dto/BankRoll/response';
import { bankrollSA, BankRollSA } from '../../service/applicatif/BankRoll';

class BankRollController extends GenericController<
  BankRollDO,
  BankRollRequestDTO,
  BankRollResponseDTO,
  BankRollSA
> {}

export const bankrollController = new BankRollController(bankrollSA);

