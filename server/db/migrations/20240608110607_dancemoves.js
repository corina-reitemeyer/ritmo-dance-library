/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('dance_moves', (table) => {
    table.increments('id').primary()
    table.integer('style_id').notNullable()
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
    table.integer('bar_counts').notNullable()
    table.string('source')
    table.string('instructions_follower')
    table.string('instructions_lead')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('dance_moves')
}
