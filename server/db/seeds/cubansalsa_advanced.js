/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('dance_moves').del()
  await knex('dance_moves').insert([
    {
      id: 1,
      name: 'Open Hold',
      level: 'Beginner',
      synonymns: 'n/a',
      translation: 'n/a',
      move_type: 'Follow/Lead Technique',
      rueda_sign: 'n/a',
      starts_with: 'Basic',
      contains: 'Salsa on 1 basic',
      similar_to: 'Closed hold',
      bar_counts: 2,
      source: '',
      variations: 'n/a',
    },
  ])
}
