import {MigrationInterface, QueryRunner} from "typeorm";

export class initialState1639759939054 implements MigrationInterface {
    name = 'initialState1639759939054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "company" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "RNC" text NOT NULL, "foundation_date" TIMESTAMP NOT NULL, "status" text NOT NULL, "update_at" TIMESTAMP DEFAULT now(), "create_at" TIMESTAMP NOT NULL DEFAULT now(), "user_update" text, "user_insert" text, CONSTRAINT "UQ_a76c5cd486f7779bd9c319afd27" UNIQUE ("name"), CONSTRAINT "UQ_fabc1dd0bd5f1fbf62cae6d3fe3" UNIQUE ("RNC"), CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "department" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "location" text NOT NULL, "budget" integer NOT NULL, "company_id" uuid NOT NULL, "status" text NOT NULL, "type" text NOT NULL, "update_at" TIMESTAMP DEFAULT now(), "create_at" TIMESTAMP NOT NULL DEFAULT now(), "user_update" text, "user_insert" text, CONSTRAINT "UQ_471da4b90e96c1ebe0af221e07b" UNIQUE ("name"), CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "rol_name" text NOT NULL, "type" text NOT NULL, "company_id" text NOT NULL, "status" text NOT NULL, "update_at" TIMESTAMP DEFAULT now(), "create_at" TIMESTAMP NOT NULL DEFAULT now(), "user_update" text, "user_insert" text, CONSTRAINT "UQ_96b4863026d687359fe1a911e99" UNIQUE ("rol_name"), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact_parent" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fist_name" text NOT NULL, "last_name" text NOT NULL, "parent_type" text NOT NULL, "cell" text, "tell" text, "company_id" text NOT NULL, "status" text NOT NULL, "email" text, "update_at" TIMESTAMP DEFAULT now(), "create_at" TIMESTAMP NOT NULL DEFAULT now(), "user_update" text, "user_insert" text, "employee_id" uuid, CONSTRAINT "UQ_4654f80cf6aa467cd113e7c53ce" UNIQUE ("fist_name"), CONSTRAINT "PK_55c40b931096fefd2645de0f45f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cash_discount" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" integer NOT NULL, "company_id" text NOT NULL, "status" text NOT NULL, "update_at" TIMESTAMP DEFAULT now(), "create_at" TIMESTAMP NOT NULL DEFAULT now(), "user_update" text, "user_insert" text, "paysheet_id" uuid, CONSTRAINT "PK_0d9473c3b48c24fa5f1a4d21706" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment_news" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" integer NOT NULL, "type" text NOT NULL, "description" text NOT NULL, "operation" text NOT NULL, "status" text NOT NULL, "nomina_id" text, "update_at" TIMESTAMP DEFAULT now(), "create_at" TIMESTAMP NOT NULL DEFAULT now(), "user_update" text, "user_insert" text, "paysheet_id" uuid, CONSTRAINT "PK_aa834aca091ebd1d67de5a1764b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "paysheet" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "salary" integer NOT NULL, "dep_id" text, "company_id" text NOT NULL, "status" text NOT NULL, "update_at" TIMESTAMP DEFAULT now(), "create_at" TIMESTAMP NOT NULL DEFAULT now(), "user_update" text, "user_insert" text, CONSTRAINT "PK_c37aeb2b6a2f61b1a471ea8e05b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "document_id" text NOT NULL, "user_name" text NOT NULL, "email_login" text NOT NULL, "password" text NOT NULL, "fist_name" text, "last_name" text, "gender" text, "age" integer, "marital_status" text, "status" text NOT NULL, "born_date" TIMESTAMP, "hire_date" TIMESTAMP, "nss" text, "nomina_id" text, "update_at" TIMESTAMP DEFAULT now(), "create_at" TIMESTAMP NOT NULL DEFAULT now(), "user_update" text, "user_insert" text, "department_id" uuid, "paysheet_id" uuid, CONSTRAINT "UQ_3d42008c12e986e37ee3bdebbd2" UNIQUE ("document_id"), CONSTRAINT "UQ_8bfa2729294a76ccfca3da2836e" UNIQUE ("email_login"), CONSTRAINT "REL_6235aec369d04cb9e4691cc52d" UNIQUE ("paysheet_id"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "activity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" text, "parent" text, "status" text NOT NULL, "update_at" TIMESTAMP DEFAULT now(), "create_at" TIMESTAMP NOT NULL DEFAULT now(), "user_update" text, "user_insert" text, "employee_id" uuid, CONSTRAINT "PK_24625a1d6b1b089c8ae206fe467" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" text NOT NULL, "city" text NOT NULL, "postal_code" text NOT NULL, "province" text NOT NULL, "owner_ref" text NOT NULL, "region" text NOT NULL, "status" text NOT NULL, "update_at" TIMESTAMP DEFAULT now(), "create_at" TIMESTAMP NOT NULL DEFAULT now(), "user_update" text, "user_insert" text, CONSTRAINT "UQ_b8dc034edd93276f096ae394fbb" UNIQUE ("street"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "relation_id" text, "owner_ref" text, "tell" text, "cell" text, "fax" text, "company_id" text NOT NULL, "status" text NOT NULL, "email" text, "update_at" TIMESTAMP DEFAULT now(), "create_at" TIMESTAMP NOT NULL DEFAULT now(), "user_update" text, "user_insert" text, CONSTRAINT "UQ_ea0e1ba7d61a899c92098af2ea9" UNIQUE ("relation_id"), CONSTRAINT "PK_65b98fa4ffb26dceb9192f5d496" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee_roles_roles" ("employeeId" uuid NOT NULL, "rolesId" uuid NOT NULL, CONSTRAINT "PK_9296a6f31aad4b916cc6933a689" PRIMARY KEY ("employeeId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4ef68462ce4b4730a5e1b7e19b" ON "employee_roles_roles" ("employeeId") `);
        await queryRunner.query(`CREATE INDEX "IDX_49a6909fca8a63df4e37edce97" ON "employee_roles_roles" ("rolesId") `);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_f840e8ae1c80c7acb64dc668118" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact_parent" ADD CONSTRAINT "FK_5c907890340d423d0855a455a53" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cash_discount" ADD CONSTRAINT "FK_dfe8bdee4e859dfe7b4fa0c08d4" FOREIGN KEY ("paysheet_id") REFERENCES "paysheet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment_news" ADD CONSTRAINT "FK_6059ed9dbd4c652e35708b5a30e" FOREIGN KEY ("paysheet_id") REFERENCES "paysheet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_d62835db8c0aec1d18a5a927549" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_6235aec369d04cb9e4691cc52da" FOREIGN KEY ("paysheet_id") REFERENCES "paysheet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "activity" ADD CONSTRAINT "FK_3341a9dbaaa4ea623a779811fcc" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee_roles_roles" ADD CONSTRAINT "FK_4ef68462ce4b4730a5e1b7e19bc" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "employee_roles_roles" ADD CONSTRAINT "FK_49a6909fca8a63df4e37edce97c" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee_roles_roles" DROP CONSTRAINT "FK_49a6909fca8a63df4e37edce97c"`);
        await queryRunner.query(`ALTER TABLE "employee_roles_roles" DROP CONSTRAINT "FK_4ef68462ce4b4730a5e1b7e19bc"`);
        await queryRunner.query(`ALTER TABLE "activity" DROP CONSTRAINT "FK_3341a9dbaaa4ea623a779811fcc"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_6235aec369d04cb9e4691cc52da"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_d62835db8c0aec1d18a5a927549"`);
        await queryRunner.query(`ALTER TABLE "payment_news" DROP CONSTRAINT "FK_6059ed9dbd4c652e35708b5a30e"`);
        await queryRunner.query(`ALTER TABLE "cash_discount" DROP CONSTRAINT "FK_dfe8bdee4e859dfe7b4fa0c08d4"`);
        await queryRunner.query(`ALTER TABLE "contact_parent" DROP CONSTRAINT "FK_5c907890340d423d0855a455a53"`);
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_f840e8ae1c80c7acb64dc668118"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_49a6909fca8a63df4e37edce97"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4ef68462ce4b4730a5e1b7e19b"`);
        await queryRunner.query(`DROP TABLE "employee_roles_roles"`);
        await queryRunner.query(`DROP TABLE "contact_info"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "activity"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "paysheet"`);
        await queryRunner.query(`DROP TABLE "payment_news"`);
        await queryRunner.query(`DROP TABLE "cash_discount"`);
        await queryRunner.query(`DROP TABLE "contact_parent"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "department"`);
        await queryRunner.query(`DROP TABLE "company"`);
    }

}
