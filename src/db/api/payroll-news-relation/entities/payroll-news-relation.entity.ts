import { CommonEntity } from "src/common/entity/common-properties";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { EmployeeEntity } from "../../employees/entities/employee.entity";
import { PayrollNewsEntity } from "../../payroll-news/entities/payroll-news.entity";

@Entity('payroll_news_relation')
export class PayrollNewsRelationEntity extends CommonEntity{
    @Column({ type: 'integer', unique: false})
    employee_id: EmployeeEntity;

    @Column({ type: 'integer', unique: false})
    payroll_news_id: PayrollNewsEntity;
}
