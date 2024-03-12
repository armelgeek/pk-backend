import { GenericController } from '../../common/infrastructure/generic.controller';
import { CodeParrainDO } from '../../data/do/CodeParrain';
// @ts-ignore
import { CodeParrainRequestDTO } from '../../data/dto/CodeParrain/request';
// @ts-ignore
import { CodeParrainResponseDTO } from '../../data/dto/CodeParrain/response';
import { codeparrainSA, CodeParrainSA } from '../../service/applicatif/CodeParrain';

class CodeParrainController extends GenericController<
  CodeParrainDO,
  CodeParrainRequestDTO,
  CodeParrainResponseDTO,
  CodeParrainSA
> {
  async getCodeparrainByCode(req, res, next) {
    try {
      const { code } = req.params;
      const data = await codeparrainSA.getCodeparrainByCodeSA(code);
      res.locals.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }
}

export const codeparrainController = new CodeParrainController(codeparrainSA);
