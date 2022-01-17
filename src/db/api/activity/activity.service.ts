import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { formatMenuOptions } from 'src/common/utils/menu/formatMenuOptions';
import { getConnection, Repository } from 'typeorm';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ActivityEntity } from './entities/activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(ActivityEntity)
    private activityRepository: Repository<ActivityEntity>,
  ) {}
  async getActivityUser(id: string) {
    const statement = `
    SELECT a.id,a.description,a.route,a.parent,a.id_actividad FROM activity a
    LEFT JOIN employee e ON e."id" = a."id"
    AND e.id = '${id}'
          `;
    const statement2 = `
    SELECT id_actividad FROM activity a
    WHERE 
	LENGTH(a.id_actividad)<=2
	ORDER BY(a.id_actividad)
          `;
    const initial =( await getConnection().query(statement2)).map((res)=> res.id_actividad);
    const data = await getConnection().query(statement);
    // console.log(initial,"initial");
    // console.log(data,"data");
    
    return formatMenuOptions(data, initial);
  }
}
