import { Controller, Get,  Query } from '@nestjs/common';
import { LocalService } from './local.service';

@Controller()
export class LocalController {
  constructor(private readonly localService: LocalService) {}
  @Get('municipalities')
  getMunicipality(@Query() params:{ProvinceId:number}) {
    return this.localService.getMunicipality(params.ProvinceId);
  }
  @Get('sectors')
  getSector(@Query() params:{MunicipalityId:number}) {
    return this.localService.getSector(params.MunicipalityId);
  }

  @Get('provinces')
  getProvinces() {
    return this.localService.getProvinces();
  }
}
