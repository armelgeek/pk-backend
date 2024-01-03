import { GenericSA } from '../../common/service/generic.sa';
import {
    testFactory,
  TestFactory,
} from '../../constraint/factory/Test';
import { TestDO } from '../../data/do/Test';
// @ts-ignore
import { TestRequestDTO } from '../../data/dto/Test/request';
// @ts-ignore
import { TestResponseDTO } from '../../data/dto/Test/response';
import { testSM, TestSM } from '../metier/Test';

export class TestSA extends GenericSA<
  TestDO,
  TestRequestDTO,
  TestResponseDTO,
  TestSM,
  TestFactory
> {
}

export const testSA = new TestSA(testSM, testFactory, 'Test');

