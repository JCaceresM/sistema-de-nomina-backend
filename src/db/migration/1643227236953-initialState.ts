import {MigrationInterface, QueryRunner} from "typeorm";

export class initialState1643227236953 implements MigrationInterface {
    name = 'initialState1643227236953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payroll_news_record" ("id" SERIAL NOT NULL, "updated_at" TIMESTAMP DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "user_update" text, "user_insert" text, "amount" real NOT NULL, "type" text NOT NULL, "description" text NOT NULL, "name" text NOT NULL, "operation" text NOT NULL, "company_id" text NOT NULL, "status" text NOT NULL, "payroll_record_detail_id" integer, CONSTRAINT "PK_ae1652a3521c14097eca4ae7269" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "payroll_news_record" ADD CONSTRAINT "FK_748f7316826782c5eadadd5f6e4" FOREIGN KEY ("payroll_record_detail_id") REFERENCES "payroll_record_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payroll_news_record" DROP CONSTRAINT "FK_748f7316826782c5eadadd5f6e4"`);
        await queryRunner.query(`DROP TABLE "payroll_news_record"`);
    }

}
