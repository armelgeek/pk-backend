import { GenericSA } from '../../common/service/generic.sa';
import {
    publicationFactory,
  PublicationFactory,
} from '../../constraint/factory/Publication';
import { PublicationDO } from '../../data/do/Publication';
// @ts-ignore
import { PublicationRequestDTO } from '../../data/dto/Publication/request';
// @ts-ignore
import { PublicationResponseDTO } from '../../data/dto/Publication/response';
import { publicationSM, PublicationSM } from '../metier/Publication';

export class PublicationSA extends GenericSA<
  PublicationDO,
  PublicationRequestDTO,
  PublicationResponseDTO,
  PublicationSM,
  PublicationFactory
> {
}

export const publicationSA = new PublicationSA(publicationSM, publicationFactory, 'Publication');

