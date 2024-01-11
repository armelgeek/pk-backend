import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { TestDO } from '../../data/do/Test';
import { TestRepository } from '../../repository/Test';

export class TestSM extends GenericSM<TestDO, string, TestRepository> {
}

export const testSM = new TestSM(getCustomRepository(TestRepository));

