import {MigrationInterface, QueryRunner} from "typeorm";

export class initialState1642372830889 implements MigrationInterface {
    name = 'initialState1642372830889'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activity" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "activity" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "payroll_news" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "payroll_news" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "positions" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "positions" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "department" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "department" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "payroll_record" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "payroll_record" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "payroll" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "payroll" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "bank_account" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "bank_account" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "activity" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "activity" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "address" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "address" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "payroll_news" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "payroll_news" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "company" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "company" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "positions" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "positions" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "department" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "department" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "payroll_record" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "payroll_record" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "payroll" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "payroll" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "bank_account" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "bank_account" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_account" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "bank_account" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "payroll" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "payroll" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "payroll_record" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "payroll_record" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "department" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "department" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "positions" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "positions" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "payroll_news" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "payroll_news" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "activity" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "activity" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "bank_account" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "bank_account" ADD "update_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "payroll" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "payroll" ADD "update_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "payroll_record" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "payroll_record" ADD "update_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "update_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "update_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "department" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "department" ADD "update_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "positions" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "positions" ADD "update_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "company" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "company" ADD "update_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "payroll_news" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "payroll_news" ADD "update_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "address" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "address" ADD "update_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "activity" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "activity" ADD "update_at" TIMESTAMP DEFAULT now()`);
    }

}
