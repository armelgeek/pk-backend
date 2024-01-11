import { GenericController } from '../../../common/infrastructure/generic.controller';
import { AdministrateurDO } from '../../../data/do/administrateur';
// @ts-ignore
import { AdministrateurRequestDTO } from '../../../data/dto/Administrateur/request';
// @ts-ignore
import { AdministrateurResponseDTO } from '../../../data/dto/Administrateur/response';
import { administrateurSA, AdministrateurSA } from '../../../service/applicatif/administrateur';

class AdministrateurController extends GenericController<
  AdministrateurDO,
  AdministrateurRequestDTO,
  AdministrateurResponseDTO,
  AdministrateurSA
> {}

export const administrateurController = new AdministrateurController(administrateurSA);
