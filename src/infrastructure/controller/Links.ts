import { GenericController } from '../../common/infrastructure/generic.controller';
import { LinksDO } from '../../data/do/Links';
// @ts-ignore
import { LinksRequestDTO } from '../../data/dto/Links/request';
// @ts-ignore
import { LinksResponseDTO } from '../../data/dto/Links/response';
import { linksSA, LinksSA } from '../../service/applicatif/Links';

class LinksController extends GenericController<
  LinksDO,
  LinksRequestDTO,
  LinksResponseDTO,
  LinksSA
> {}

export const linksController = new LinksController(linksSA);

