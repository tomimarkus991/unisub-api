import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return (
    knex.schema
      // table user
      .createTable("user", table => {
        table.increments("id").primary();
        table.string("username").notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.string("avatar").notNullable();
        table.timestamps(true, true);
      })

      // table subscription has one user
      .createTable("subscription", table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("description").notNullable();
        table.string("price").notNullable();
        table.string("duration").notNullable();
        table.timestamps(true, true);
        table.integer("user_id").unsigned().notNullable();
        table.foreign("user_id").references("user.id");
      })

      // table category
      .createTable("category", table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.timestamps(true, true);
      })

      // table payment_type
      .createTable("payment_type", table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.timestamps(true, true);
      })
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable("users")
    .dropTable("subscription")
    .dropTable("category")
    .dropTable("payment_type");
}
