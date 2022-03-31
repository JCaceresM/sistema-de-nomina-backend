import {MigrationInterface, QueryRunner} from "typeorm";

export class initialState1648686592217 implements MigrationInterface {
    name = 'initialState1648686592217'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_account" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "bank_account" ADD "name" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_account" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "bank_account" ADD "name" character varying`);
    }

}
