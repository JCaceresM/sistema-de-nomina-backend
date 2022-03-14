import {MigrationInterface, QueryRunner} from "typeorm";

export class initialState1647226967657 implements MigrationInterface {
    name = 'initialState1647226967657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_9f7b878d701bec3a4b854d0a824"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "REL_9f7b878d701bec3a4b854d0a82"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_9f7b878d701bec3a4b854d0a824" FOREIGN KEY ("payroll_id") REFERENCES "payroll"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_9f7b878d701bec3a4b854d0a824"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "REL_9f7b878d701bec3a4b854d0a82" UNIQUE ("payroll_id")`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_9f7b878d701bec3a4b854d0a824" FOREIGN KEY ("payroll_id") REFERENCES "payroll"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
