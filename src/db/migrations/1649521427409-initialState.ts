import {MigrationInterface, QueryRunner} from "typeorm";

export class initialState1649521427409 implements MigrationInterface {
    name = 'initialState1649521427409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_account" ADD "type" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_account" DROP COLUMN "type"`);
    }

}
