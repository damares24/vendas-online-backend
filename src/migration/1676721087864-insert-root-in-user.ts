import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertRootInUser1676721087864 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            INSERT INTO public."user"(
                name, email, cpf, type_user, phone, password)
                VALUES ('root', 'root@root.com', '12345678901', 2, '31925325252', '$2b$10$MaEkWIy0XM3vuywbISykRegJumw8sU2tUtPdk6LuZBwGuYK9pisjS');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DELETE FROM public."user"
            WHERE email like 'root@root.com';
    `);
  }
}
