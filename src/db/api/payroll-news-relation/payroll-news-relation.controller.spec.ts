import { Test, TestingModule } from '@nestjs/testing';
import { PayrollNewsRelationController } from './payroll-news-relation.controller';
import { PayrollNewsRelationService } from './payroll-news-relation.service';

describe('PayrollNewsRelationController', () => {
  let controller: PayrollNewsRelationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayrollNewsRelationController],
      providers: [PayrollNewsRelationService],
    }).compile();

    controller = module.get<PayrollNewsRelationController>(PayrollNewsRelationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
