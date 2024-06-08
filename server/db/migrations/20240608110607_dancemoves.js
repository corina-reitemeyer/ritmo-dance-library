/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('dance-moves', (table) => {
    table.increments('id')
    table.string('name')
    table.string('level')
    table.string('synonymns')
    table.string('variations')
    table.string('move_type')
    table.string('rueda_sign')
    table.string('starts_with')
    table.string('contains')
    table.string('based_on')
    table.string('similar_to')
    table.increments('bar_counts')
    table.string('source')
    table.string('instructions')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('dance-moves')
}
