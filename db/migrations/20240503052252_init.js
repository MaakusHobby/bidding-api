/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('biddings', (table) => {
    table.increments('bid_id').primary();
    table.string('name').notNullable();
    table.integer('starting_bid').notNullable();
    table.integer('increment').notNullable();
    table.dateTime('date_posted').defaultTo(knex.fn.now());;
    table.integer('highest_bid');

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('biddings');
};
