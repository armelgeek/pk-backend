import { GenericController } from '../../common/infrastructure/generic.controller';
import { TestDO } from '../../data/do/Test';
// @ts-ignore
import { TestRequestDTO } from '../../data/dto/Test/request';
// @ts-ignore
import { TestResponseDTO } from '../../data/dto/Test/response';
import { testSA, TestSA } from '../../service/applicatif/Test';

class TestController extends GenericController<
  TestDO,
  TestRequestDTO,
  TestResponseDTO,
  TestSA
> {}

export const testController = new TestController(testSA);

