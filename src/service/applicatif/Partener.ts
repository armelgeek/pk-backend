import { GenericSA } from '../../common/service/generic.sa';
import {
    partenerFactory,
  PartenerFactory,
} from '../../constraint/factory/Partener';
import { PartenerDO } from '../../data/do/Partener';
// @ts-ignore
import { PartenerRequestDTO } from '../../data/dto/Partener/request';
// @ts-ignore
import { PartenerResponseDTO } from '../../data/dto/Partener/response';
import { partenerSM, PartenerSM } from '../metier/Partener';

export class PartenerSA extends GenericSA<
  PartenerDO,
  PartenerRequestDTO,
  PartenerResponseDTO,
  PartenerSM,
  PartenerFactory
> {
}

export const partenerSA = new PartenerSA(partenerSM, partenerFactory, 'Partener');

