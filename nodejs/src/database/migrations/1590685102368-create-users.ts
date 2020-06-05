import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsers1590685102368 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uniqueidentifier",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "NEWID()",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "createAt",
                        type: "datetime",
                        default: "GETDATE()",
                    },
                    {
                        name: "updateAt",
                        type: "datetime",
                        default: "GETDATE()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
