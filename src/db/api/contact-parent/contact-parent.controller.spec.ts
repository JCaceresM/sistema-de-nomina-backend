import { Test, TestingModule } from '@nestjs/testing';
import { ContactParentController } from './contact-parent.controller';
import { ContactParentService } from './contact-parent.service';

describe('ContactParentController', () => {
  let controller: ContactParentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactParentController],
      providers: [ContactParentService],
    }).compile();

    controller = module.get<ContactParentController>(ContactParentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
