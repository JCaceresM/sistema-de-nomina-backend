import {MigrationInterface, QueryRunner} from "typeorm";

export class initialState1643137003844 implements MigrationInterface {
    name = 'initialState1643137003844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payroll_record" DROP CONSTRAINT "FK_ae54c7b226d373987d1ac61aca5"`);
        await queryRunner.query(`ALTER TABLE "payroll_record" DROP COLUMN "employee_id"`);
        await queryRunner.query(`ALTER TABLE "payroll_record_detail" ADD "employee_id" integer`);
        await queryRunner.query(`ALTER TABLE "payroll_record_detail" ADD CONSTRAINT "FK_db71832ef9e1e5459a6139e1082" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payroll_record_detail" DROP CONSTRAINT "FK_db71832ef9e1e5459a6139e1082"`);
        await queryRunner.query(`ALTER TABLE "payroll_record_detail" DROP COLUMN "employee_id"`);
        await queryRunner.query(`ALTER TABLE "payroll_record" ADD "employee_id" integer`);
        await queryRunner.query(`ALTER TABLE "payroll_record" ADD CONSTRAINT "FK_ae54c7b226d373987d1ac61aca5" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
