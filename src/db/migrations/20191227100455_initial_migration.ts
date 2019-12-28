import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('resources', table => {
    table.uuid('id').primary();
    table
      .string('name')
      .notNullable()
      .unique();
    table.dateTime('created_at');
    table.dateTime('updated_at').nullable();
    table.dateTime('deleted_at').nullable();
  });

  await knex.schema.createTable('reservations', table => {
    table.uuid('id').primary();
    table.uuid('resource_id').nullable();
    table.uuid('user_id').nullable();
    table.timestamp('start_time').notNullable();
    table.timestamp('end_time').notNullable();
    table.dateTime('created_at');
    table.dateTime('updated_at').nullable();
    table.dateTime('deleted_at').nullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists('resources');
  await knex.schema.dropTableIfExists('reservations');
}
