/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('dance_styles').del()
  await knex('dance_styles').insert([{ id: 1, name: 'Cuban Salsa' }])
}

// In the future: Linear Salsa (id: 2), Bachata Sensual (id: 3), Bachata Moderna (id: 4), Bachata Dominicana (id: 5)
