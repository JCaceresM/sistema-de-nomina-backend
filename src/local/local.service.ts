import { Injectable } from '@nestjs/common';
import * as Provinces from '../seeders/Provinces.json'
import * as Municipalities from '../seeders/Municipalities.json'
import * as Sector from '../seeders/Sectors.json'

@Injectable()
export class LocalService {
  private provinces = Provinces||[]
  private municipalities = Municipalities||[]
  private sector = Sector||[]
  constructor() {
     this.provinces = Provinces||[]
     this.municipalities = Municipalities||[]
     this.sector = Sector||[]
  }
  getProvinces() {

    return this.provinces;
  }

  getMunicipality(ProvinceId:number) {
    return this.municipalities.filter((e)=> e.ProvinceId === ProvinceId);
  }

  getSector(MunicipalityId: number) {
    return this.sector.filter((e)=> e.MunicipalityId === MunicipalityId);
  }

 
}
