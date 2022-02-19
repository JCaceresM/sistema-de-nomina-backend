import { CommonEntity } from "src/common/entity/common-properties";
import { Entity, OneToOne, JoinColumn, Column } from "typeorm";
import { EmployeeEntity } from "../../employees/entities/employee.entity";
import { PayrollRecordEntity } from "../../payroll-record/entities/payroll-record.entity";

@Entity('payroll_record_users_relation')
export class PayrollRecordUsersRelationEntity extends CommonEntity{
    @Column({ type: 'integer', unique: false})
    employee_id: number;

    @Column({ type: 'integer', unique: false})
    payroll_record_id: number;
}
