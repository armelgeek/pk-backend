import { GenericSA } from '../../common/service/generic.sa';
import {
    blockingFactory,
  BlockingFactory,
} from '../../constraint/factory/Blocking';
import { BlockingDO } from '../../data/do/Blocking';
// @ts-ignore
import { BlockingRequestDTO } from '../../data/dto/Blocking/request';
// @ts-ignore
import { BlockingResponseDTO } from '../../data/dto/Blocking/response';
import { blockingSM, BlockingSM } from '../metier/Blocking';

export class BlockingSA extends GenericSA<
  BlockingDO,
  BlockingRequestDTO,
  BlockingResponseDTO,
  BlockingSM,
  BlockingFactory
> {
}

export const blockingSA = new BlockingSA(blockingSM, blockingFactory, 'Blocking');

