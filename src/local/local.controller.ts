import { Controller, Get,  Query } from '@nestjs/common';
import { LocalService } from './local.service';

@Controller()
export class LocalController {
  constructor(private readonly localService: LocalService) {}
  @Get('municipalities')
  getMunicipality(@Query() params:{ProvinceId:string}) {
    return this.localService.getMunicipality(parseInt(params.ProvinceId));
  }
  @Get('sectors')
  getSector(@Query() params:{MunicipalityId:string}) {
    return this.localService.getSector(parseInt(params.MunicipalityId));
  }

  @Get('provinces')
  getProvinces() {
    return this.localService.getProvinces();
  }
}
