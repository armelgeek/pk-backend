import { GenericController } from '../../common/infrastructure/generic.controller';
import { LinkDO } from '../../data/do/Link';
// @ts-ignore
import { LinkRequestDTO } from '../../data/dto/Link/request';
// @ts-ignore
import { LinkResponseDTO } from '../../data/dto/Link/response';
import { linkSA, LinkSA } from '../../service/applicatif/Link';

class LinkController extends GenericController<
  LinkDO,
  LinkRequestDTO,
  LinkResponseDTO,
  LinkSA
> {}

export const linkController = new LinkController(linkSA);

