import { GenericController } from '../../common/infrastructure/generic.controller';
import { BlockingDO } from '../../data/do/Blocking';
// @ts-ignore
import { BlockingRequestDTO } from '../../data/dto/Blocking/request';
// @ts-ignore
import { BlockingResponseDTO } from '../../data/dto/Blocking/response';
import { blockingSA, BlockingSA } from '../../service/applicatif/Blocking';

class BlockingController extends GenericController<
  BlockingDO,
  BlockingRequestDTO,
  BlockingResponseDTO,
  BlockingSA
> {}

export const blockingController = new BlockingController(blockingSA);

