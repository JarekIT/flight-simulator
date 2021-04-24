import { Test, TestingModule } from '@nestjs/testing';
import { AirportsService } from '../services/airports.service';
import { AirportsController } from '../controllers/airports.controller';

describe('AirportsController', () => {
  let controller: AirportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirportsController],
      providers: [AirportsService],
    }).compile();

    controller = module.get<AirportsController>(AirportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
