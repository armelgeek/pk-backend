import { GenericSA } from '../../common/service/generic.sa';
import {
    tournamenttypeFactory,
  TournamentTypeFactory,
} from '../../constraint/factory/TournamentType';
import { TournamentTypeDO } from '../../data/do/TournamentType';
// @ts-ignore
import { TournamentTypeRequestDTO } from '../../data/dto/TournamentType/request';
// @ts-ignore
import { TournamentTypeResponseDTO } from '../../data/dto/TournamentType/response';
import { tournamenttypeSM, TournamentTypeSM } from '../metier/TournamentType';

export class TournamentTypeSA extends GenericSA<
  TournamentTypeDO,
  TournamentTypeRequestDTO,
  TournamentTypeResponseDTO,
  TournamentTypeSM,
  TournamentTypeFactory
> {
}

export const tournamenttypeSA = new TournamentTypeSA(tournamenttypeSM, tournamenttypeFactory, 'TournamentType');

