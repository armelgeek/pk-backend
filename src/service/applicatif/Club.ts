import { GenericSA } from '../../common/service/generic.sa';
import {
    clubFactory,
  ClubFactory,
} from '../../constraint/factory/Club';
import { ClubDO } from '../../data/do/Club';
// @ts-ignore
import { ClubRequestDTO } from '../../data/dto/Club/request';
// @ts-ignore
import { ClubResponseDTO } from '../../data/dto/Club/response';
import { clubSM, ClubSM } from '../metier/Club';

export class ClubSA extends GenericSA<
  ClubDO,
  ClubRequestDTO,
  ClubResponseDTO,
  ClubSM,
  ClubFactory
> {
}

export const clubSA = new ClubSA(clubSM, clubFactory, 'Club');

