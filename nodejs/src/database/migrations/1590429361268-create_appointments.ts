import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createAppointments1590429361268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "appointments",
        columns: [
          {
            name: "id",
            type: "uniqueidentifier",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "NEWID()",
          },
          {
            name: "provider",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "date",
            type: "datetime",
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
    await queryRunner.dropTable("appointments");
  }
}
