import {MigrationInterface, QueryRunner} from "typeorm";

export class initialState1646002704357 implements MigrationInterface {
    name = 'initialState1646002704357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "UQ_3d42008c12e986e37ee3bdebbd2"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "document_id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "document_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "UQ_3d42008c12e986e37ee3bdebbd2" UNIQUE ("document_id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "UQ_3d42008c12e986e37ee3bdebbd2"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "document_id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "document_id" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "UQ_3d42008c12e986e37ee3bdebbd2" UNIQUE ("document_id")`);
    }

}
