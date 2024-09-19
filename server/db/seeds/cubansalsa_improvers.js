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
      style_id: 1,
      name: 'Cuban Break with Turn',
      level: 'Improver',
      synonyms: 'Break and Turn',
      translation: 'Ruptura Cubana con Giro',
      move_type: 'Basic Turn',
      rueda_sign: 'N/A',
      starts_with: 'From Cuban break',
      contains: 'Break with a 360-degree turn',
      based_on: 'Cuban rhythms',
      similar_to: 'Cuban Break',
      bar_counts: 4,
      instructions_follower: 'Break to the side and turn completely.',
      instructions_lead: 'Guide the follower through the break and turn.',
      source: 'Salsa Improver Techniques',
      variations: 'Add arm styling',
    },
    {
      id: 2,
      style_id: 1,
      name: 'Cross Body Lead with Turn',
      level: 'Improver',
      synonyms: 'CBL with Turn',
      translation: 'Liderar Cruzado con Giro',
      move_type: 'Lead',
      rueda_sign: 'N/A',
      starts_with: 'From basic step',
      contains: 'Cross body lead followed by a turn',
      based_on: 'Cuban salsa technique',
      similar_to: 'Cross Body Lead',
      bar_counts: 4,
      instructions_follower: "Step across and turn under the lead's arm.",
      instructions_lead: 'Lead the follower through the cross and turn.',
      source: 'Salsa Improver Techniques',
      variations: 'Incorporate different handholds',
    },
    {
      id: 3,
      style_id: 1,
      name: 'Cubanito with Turn',
      level: 'Improver',
      synonyms: 'Cuban Step with Turn',
      translation: 'Cubanito con Giro',
      move_type: 'Basic Turn',
      rueda_sign: 'N/A',
      starts_with: 'Basic Cubanito step',
      contains: 'Cubanito followed by a turn',
      based_on: 'Cuban salsa styling',
      similar_to: 'Cubanito',
      bar_counts: 4,
      instructions_follower: 'Complete the Cubanito, then turn.',
      instructions_lead: 'Lead the Cubanito and encourage a turn.',
      source: 'Salsa Improver Techniques',
      variations: 'Add footwork variations',
    },
    {
      id: 4,
      style_id: 1,
      name: 'Dile Que Si',
      level: 'Improver',
      synonyms: 'Say Yes',
      translation: 'Dile Que Sí',
      move_type: 'Turn',
      rueda_sign: 'N/A',
      starts_with: 'From basic step',
      contains: 'Follower turns away from lead',
      based_on: 'Cuban salsa connection',
      similar_to: 'Dile Que No',
      bar_counts: 4,
      instructions_follower: 'Turn away while stepping back.',
      instructions_lead: 'Guide the follower into the turn.',
      source: 'Salsa Basics',
      variations: 'Incorporate a reverse turn',
    },
    {
      id: 5,
      style_id: 1,
      name: 'Inside Turn',
      level: 'Improver',
      synonyms: 'Right Turn',
      translation: 'Giro Interno',
      move_type: 'Turn',
      rueda_sign: 'N/A',
      starts_with: 'From cross body lead',
      contains: 'Follower turns to the right',
      based_on: 'Cuban salsa technique',
      similar_to: 'Right Turn',
      bar_counts: 4,
      instructions_follower: 'Turn to the right as you step.',
      instructions_lead: 'Lead the turn smoothly.',
      source: 'Salsa Improver Techniques',
      variations: 'Add a double turn',
    },
    {
      id: 6,
      style_id: 1,
      name: 'Outside Turn',
      level: 'Improver',
      synonyms: 'Left Turn',
      translation: 'Giro Externo',
      move_type: 'Turn',
      rueda_sign: 'N/A',
      starts_with: 'From cross body lead',
      contains: 'Follower turns to the left',
      based_on: 'Cuban salsa technique',
      similar_to: 'Left Turn',
      bar_counts: 4,
      instructions_follower: 'Turn to the left while stepping back.',
      instructions_lead: 'Lead the follower into the left turn.',
      source: 'Salsa Basics',
      variations: 'Change hand positions',
    },
    {
      id: 7,
      style_id: 1,
      name: 'Copa with Arm Styling',
      level: 'Improver',
      synonyms: 'Cup Turn',
      translation: 'Copa con Estilo',
      move_type: 'Turn',
      rueda_sign: 'N/A',
      starts_with: 'From basic step',
      contains: 'Follower turns with arm styling',
      based_on: 'Cuban salsa styling',
      similar_to: 'Copa',
      bar_counts: 4,
      instructions_follower: 'Add arm movements during the turn.',
      instructions_lead: "Encourage the follower's arm styling.",
      source: 'Salsa Improver Techniques',
      variations: 'Different arm positions',
    },
    {
      id: 8,
      style_id: 1,
      name: 'Reverse CBL',
      level: 'Improver',
      synonyms: 'Reverse Cross Body Lead',
      translation: 'Liderar Cruzado Inverso',
      move_type: 'Lead',
      rueda_sign: 'N/A',
      starts_with: 'From basic step',
      contains: 'Reverse cross body lead',
      based_on: 'Cuban salsa technique',
      similar_to: 'Cross Body Lead',
      bar_counts: 4,
      instructions_follower: 'Step across and move backward.',
      instructions_lead: 'Guide the follower to move backward.',
      source: 'Cuban Salsa Techniques',
      variations: 'Add a turn',
    },
    {
      id: 9,
      style_id: 1,
      name: 'Cuban Salsa Wave with Partner',
      level: 'Improver',
      synonyms: 'Partner Wave',
      translation: 'Ola Cubana con Pareja',
      move_type: 'Body Movement',
      rueda_sign: 'N/A',
      starts_with: 'From basic stance',
      contains: 'Wave motion with partner connection',
      based_on: 'Cuban salsa styling',
      similar_to: 'Body Wave',
      bar_counts: 4,
      instructions_follower: 'Follow the wave motion while connected.',
      instructions_lead: 'Guide the wave motion with your body.',
      source: 'Salsa Improver Techniques',
      variations: 'Different wave styles',
    },
    {
      id: 10,
      style_id: 1,
      name: 'Crossover with Styling',
      level: 'Improver',
      synonyms: 'Cross Step with Styling',
      translation: 'Paso Cruzado con Estilo',
      move_type: 'Step',
      rueda_sign: 'N/A',
      starts_with: 'From basic step',
      contains: 'Cross step with additional styling',
      based_on: 'Cuban salsa styling',
      similar_to: 'Crossover Step',
      bar_counts: 4,
      instructions_follower: 'Cross step and add personal styling.',
      instructions_lead: 'Lead the crossover and encourage styling.',
      source: 'Cuban Salsa Basics',
      variations: 'Different foot placements',
    },
    {
      id: 11,
      style_id: 1,
      name: 'Salsa Suelta',
      level: 'Improver',
      synonyms: 'Free Style',
      translation: 'Salsa Suelta',
      move_type: 'Solo',
      rueda_sign: 'N/A',
      starts_with: 'From basic stance',
      contains: 'Free footwork variations',
      based_on: 'Cuban salsa rhythms',
      similar_to: 'Shine',
      bar_counts: 4,
      instructions_follower: 'Explore footwork freely.',
      instructions_lead: 'Incorporate freestyle footwork.',
      source: 'Salsa Improver Techniques',
      variations: 'Add spins and turns',
    },
    {
      id: 12,
      style_id: 1,
      name: 'Cuban Wave',
      level: 'Improver',
      synonyms: 'Body Wave',
      translation: 'Ola Cubana',
      move_type: 'Body Movement',
      rueda_sign: 'N/A',
      starts_with: 'From basic stance',
      contains: 'Wave motion through body',
      based_on: 'Cuban salsa styling',
      similar_to: 'Body Movement',
      bar_counts: 4,
      instructions_follower: 'Create a wave motion with your body.',
      instructions_lead: 'Guide the follower through the wave.',
      source: 'Cuban Salsa for Beginners',
      variations: 'Different styles of waves',
    },
    {
      id: 13,
      style_id: 1,
      name: 'Cuban Turn',
      level: 'Improver',
      synonyms: 'Cuban Spin',
      translation: 'Giro Cubano',
      move_type: 'Turn',
      rueda_sign: 'N/A',
      starts_with: 'From basic step',
      contains: 'Spin with style',
      based_on: 'Cuban salsa technique',
      similar_to: 'Inside Turn',
      bar_counts: 4,
      instructions_follower: 'Complete a spin while stepping.',
      instructions_lead: 'Guide the spin with your lead.',
      source: 'Salsa Improver Techniques',
      variations: 'Add speed to the spin',
    },
    {
      id: 14,
      style_id: 1,
      name: 'Cuban Dip',
      level: 'Improver',
      synonyms: 'Dip',
      translation: 'Inclinación Cubana',
      move_type: 'Dip',
      rueda_sign: 'N/A',
      starts_with: 'From basic stance',
      contains: 'Dipping movement',
      based_on: 'Cuban salsa styling',
      similar_to: 'Body Movement',
      bar_counts: 4,
      instructions_follower: 'Follow the lead into a dip.',
      instructions_lead: 'Lead the dip smoothly.',
      source: 'Salsa Basics',
      variations: 'Different angles of dip',
    },
    {
      id: 15,
      style_id: 1,
      name: 'Cuban Timing Variation',
      level: 'Improver',
      synonyms: 'Timing Change',
      translation: 'Variación de Tiempo Cubano',
      move_type: 'Timing',
      rueda_sign: 'N/A',
      starts_with: 'From basic step',
      contains: 'Changing timing of steps',
      based_on: 'Cuban salsa rhythms',
      similar_to: 'Basic Step',
      bar_counts: 4,
      instructions_follower: 'Change timing with your steps.',
      instructions_lead: 'Lead with a different timing pattern.',
      source: 'Cuban Salsa Techniques',
      variations: 'Add syncopation',
    },
    {
      id: 16,
      style_id: 1,
      name: 'Cuban Syncopation',
      level: 'Improver',
      synonyms: 'Rhythmic Variation',
      translation: 'Sincopación Cubana',
      move_type: 'Rhythm',
      rueda_sign: 'N/A',
      starts_with: 'From basic step',
      contains: 'Syncopated rhythm variations',
      based_on: 'Cuban salsa rhythms',
      similar_to: 'Basic Step',
      bar_counts: 4,
      instructions_follower: 'Add syncopation to your steps.',
      instructions_lead: 'Lead with a syncopated rhythm.',
      source: 'Salsa Improver Techniques',
      variations: 'Different syncopated patterns',
    },
    {
      id: 17,
      style_id: 1,
      name: 'Cuban Hip Movement',
      level: 'Improver',
      synonyms: 'Hip Sway',
      translation: 'Movimiento de Cadera',
      move_type: 'Body Movement',
      rueda_sign: 'N/A',
      starts_with: 'From basic stance',
      contains: 'Hip movement with steps',
      based_on: 'Cuban salsa styling',
      similar_to: 'Body Movement',
      bar_counts: 4,
      instructions_follower: 'Sway your hips with the music.',
      instructions_lead: 'Encourage hip movement with connection.',
      source: 'Salsa Improver Techniques',
      variations: 'Different hip styles',
    },
    {
      id: 18,
      style_id: 1,
      name: 'Salsa Chassé',
      level: 'Improver',
      synonyms: 'Chassé Step',
      translation: 'Paso Chassé',
      move_type: 'Basic',
      rueda_sign: 'N/A',
      starts_with: 'From basic step',
      contains: 'Chassé side movement',
      based_on: 'Cuban salsa footwork',
      similar_to: 'Side Step',
      bar_counts: 4,
      instructions_follower: 'Step side to side in a chassé.',
      instructions_lead: 'Lead the chassé movement.',
      source: 'Salsa Basics',
      variations: 'Add a turn',
    },
    {
      id: 19,
      style_id: 1,
      name: 'Cuban Pasillo',
      level: 'Improver',
      synonyms: 'Pasillo Step',
      translation: 'Paso Pasillo',
      move_type: 'Step',
      rueda_sign: 'N/A',
      starts_with: 'From basic step',
      contains: 'Stepping through a narrow space',
      based_on: 'Cuban salsa footwork',
      similar_to: 'Basic Step',
      bar_counts: 4,
      instructions_follower: 'Step forward and sideways in a pasillo.',
      instructions_lead: 'Guide the follower through the pasillo step.',
      source: 'Cuban Salsa Techniques',
      variations: 'Add hip movements',
    },
    {
      id: 20,
      style_id: 1,
      name: 'Cuban Shoulder Movement',
      level: 'Improver',
      synonyms: 'Shoulder Sway',
      translation: 'Movimiento de Hombros',
      move_type: 'Body Movement',
      rueda_sign: 'N/A',
      starts_with: 'From basic stance',
      contains: 'Shoulder movement with steps',
      based_on: 'Cuban salsa styling',
      similar_to: 'Body Movement',
      bar_counts: 4,
      instructions_follower: 'Sway your shoulders with the music.',
      instructions_lead: 'Lead the shoulder movement.',
      source: 'Salsa Improver Techniques',
      variations: 'Different styles of shoulder sway',
    },
    {
      id: 53,
      style_id: 1,
      name: 'Adios',
      level: 'Improver',
      synonyms: 'Goodbye',
      translation: 'Adiós',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Begin in a closed position',
      contains: 'Farewell motion',
      based_on: 'Basic Step',
      similar_to: 'Dame',
      bar_counts: 8,
      instructions_follower: 'Follow the farewell lead.',
      instructions_lead: 'Guide the goodbye motion clearly.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 54,
      style_id: 1,
      name: 'Botala',
      level: 'Improver',
      synonyms: 'Throw It',
      translation: 'Botala',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start from a basic position',
      contains: 'Throwing motion',
      based_on: 'Basic Step',
      similar_to: 'Dame',
      bar_counts: 8,
      instructions_follower: 'Follow the throwing movement.',
      instructions_lead: 'Lead the throw effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 55,
      style_id: 1,
      name: 'Caminala',
      level: 'Improver',
      synonyms: 'The Walk',
      translation: 'Caminála',
      move_type: 'Basic',
      rueda_sign: 'N/A',
      starts_with: 'Begin in a closed position',
      contains: 'Walking motion',
      based_on: 'Basic Step',
      similar_to: 'Basic Steps',
      bar_counts: 8,
      instructions_follower: 'Step as directed.',
      instructions_lead: 'Lead the walking steps clearly.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 56,
      style_id: 1,
      name: 'Candado',
      level: 'Improver',
      synonyms: 'Lock',
      translation: 'Candado',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start from a closed position',
      contains: 'Locking motion',
      based_on: 'Basic Step',
      similar_to: 'Basic Steps',
      bar_counts: 8,
      instructions_follower: 'Follow the locking lead.',
      instructions_lead: 'Guide through the locking movement.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 57,
      style_id: 1,
      name: 'Chica Brutal',
      level: 'Improver',
      synonyms: 'Brutal Girl',
      translation: 'Chica Brutal',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start from a basic step',
      contains: 'Dynamic girl movements',
      based_on: 'Basic Step',
      similar_to: "Ladies' Movements",
      bar_counts: 8,
      instructions_follower: 'Execute the dynamic movements.',
      instructions_lead: 'Lead with strong signals.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 58,
      style_id: 1,
      name: 'Dame Abajo',
      level: 'Improver',
      synonyms: 'Give Me Down',
      translation: 'Dame Abajo',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start in closed position',
      contains: 'Downward giving motion',
      based_on: 'Dame',
      similar_to: 'Dame',
      bar_counts: 8,
      instructions_follower: 'Follow the downward lead.',
      instructions_lead: 'Guide the downward movement effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 59,
      style_id: 1,
      name: 'Dame Dos / Tres',
      level: 'Improver',
      synonyms: 'Give Me Two / Three',
      translation: 'Dame Dos / Tres',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Begin with a basic step',
      contains: 'Multiple giving motions',
      based_on: 'Dame',
      similar_to: 'Dame',
      bar_counts: 8,
      instructions_follower: 'Follow the multiple leads.',
      instructions_lead: 'Lead through the two or three motions.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 60,
      style_id: 1,
      name: 'Dame Dos Con Cuba',
      level: 'Improver',
      synonyms: 'Give Me Two with Cuba',
      translation: 'Dame Dos Con Cuba',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start in closed position',
      contains: 'Cuban-style giving motion',
      based_on: 'Dame',
      similar_to: 'Dame',
      bar_counts: 8,
      instructions_follower: 'Follow the Cuban lead.',
      instructions_lead: 'Guide the Cuban-style motions effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 61,
      style_id: 1,
      name: 'Dile Que Pare',
      level: 'Improver',
      synonyms: 'Tell Him to Stop',
      translation: 'Dile Que Pare',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Begin with a basic step',
      contains: 'Stopping motion',
      based_on: 'Basic Step',
      similar_to: 'Stop Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the stopping lead.',
      instructions_lead: 'Lead the stop movement clearly.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 62,
      style_id: 1,
      name: 'Dile Que Si',
      level: 'Improver',
      synonyms: 'Tell Him Yes',
      translation: 'Dile Que Sí',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start from a basic position',
      contains: 'Affirmative motion',
      based_on: 'Basic Step',
      similar_to: 'Agree Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the affirmative lead.',
      instructions_lead: 'Guide the yes movement effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 63,
      style_id: 1,
      name: 'Directo',
      level: 'Improver',
      synonyms: 'Direct',
      translation: 'Directo',
      move_type: 'Basic',
      rueda_sign: 'N/A',
      starts_with: 'Start in closed position',
      contains: 'Direct movement',
      based_on: 'Basic Step',
      similar_to: 'Straight Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the direct lead.',
      instructions_lead: 'Guide the direct motions clearly.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 64,
      style_id: 1,
      name: 'El Uno',
      level: 'Improver',
      synonyms: 'The One',
      translation: 'El Uno',
      move_type: 'Basic',
      rueda_sign: 'N/A',
      starts_with: 'Begin with a basic step',
      contains: 'One count movement',
      based_on: 'Basic Step',
      similar_to: 'Single Moves',
      bar_counts: 4,
      instructions_follower: 'Follow the one count lead.',
      instructions_lead: 'Lead the one count effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 65,
      style_id: 1,
      name: 'Enchufala Doble Complicado',
      level: 'Improver',
      synonyms: 'Double Complicated Hook',
      translation: 'Enchúfala Doble Complicado',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start from a basic position',
      contains: 'Complicated double hooking',
      based_on: 'Enchufala',
      similar_to: 'Complicated Moves',
      bar_counts: 8,
      instructions_follower: 'Navigate the double complicated hook.',
      instructions_lead: 'Guide through the complexities effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 66,
      style_id: 1,
      name: 'Enchufala Y Casate',
      level: 'Improver',
      synonyms: 'Hook and Get Married',
      translation: 'Enchúfala y Cásate',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start with a basic step',
      contains: 'Hook and wedding theme',
      based_on: 'Enchufala',
      similar_to: 'Wedding Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the hook and wedding movement.',
      instructions_lead: 'Guide the combined movements effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 67,
      style_id: 1,
      name: 'Esquipi',
      level: 'Improver',
      synonyms: 'Skip',
      translation: 'Esquipi',
      move_type: 'Basic',
      rueda_sign: 'N/A',
      starts_with: 'Begin with a basic step',
      contains: 'Skipping motion',
      based_on: 'Basic Step',
      similar_to: 'Basic Steps',
      bar_counts: 4,
      instructions_follower: 'Follow the skipping lead.',
      instructions_lead: 'Lead the skip clearly.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 68,
      style_id: 1,
      name: 'Evelyn',
      level: 'Improver',
      synonyms: 'N/A',
      translation: 'Evelyn',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start from closed position',
      contains: 'Evelyn-style movements',
      based_on: 'Basic Step',
      similar_to: 'Unique Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the Evelyn movements.',
      instructions_lead: 'Lead with the Evelyn style effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 69,
      style_id: 1,
      name: 'Exhibela',
      level: 'Improver',
      synonyms: 'Show Her',
      translation: 'Exhibela',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start from a basic position',
      contains: 'Showing motion',
      based_on: 'Basic Step',
      similar_to: 'Show Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the show lead.',
      instructions_lead: 'Guide the showing movements clearly.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 70,
      style_id: 1,
      name: 'Exhibela Doble',
      level: 'Improver',
      synonyms: 'Double Show',
      translation: 'Exhibela Doble',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Begin with a basic step',
      contains: 'Double showing motion',
      based_on: 'Exhibela',
      similar_to: 'Show Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the double show lead.',
      instructions_lead: 'Lead through the double motions effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 71,
      style_id: 1,
      name: 'Exhibela Mentira',
      level: 'Improver',
      synonyms: 'Fake Show',
      translation: 'Exhibela Mentira',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start in closed position',
      contains: 'Fake showing motion',
      based_on: 'Exhibela',
      similar_to: 'Show Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the fake show lead.',
      instructions_lead: 'Guide the fake movements effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 72,
      style_id: 1,
      name: 'Festival Prima',
      level: 'Improver',
      synonyms: 'Festival Cousin',
      translation: 'Festival Prima',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Begin with a basic step',
      contains: 'Festival theme movements',
      based_on: 'Festival Moves',
      similar_to: 'Cousin Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the festival theme.',
      instructions_lead: 'Lead through the festival motions.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 73,
      style_id: 1,
      name: 'Kentucky',
      level: 'Improver',
      synonyms: 'N/A',
      translation: 'Kentucky',
      move_type: 'Basic',
      rueda_sign: 'N/A',
      starts_with: 'Start from basic position',
      contains: 'Kentucky-style movement',
      based_on: 'Basic Step',
      similar_to: 'Basic Steps',
      bar_counts: 4,
      instructions_follower: 'Follow the Kentucky movements.',
      instructions_lead: 'Guide through the Kentucky style.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 74,
      style_id: 1,
      name: 'La Pelota',
      level: 'Improver',
      synonyms: 'The Ball',
      translation: 'La Pelota',
      move_type: 'Basic',
      rueda_sign: 'N/A',
      starts_with: 'Begin in closed position',
      contains: 'Ball motion',
      based_on: 'Basic Step',
      similar_to: 'Basic Steps',
      bar_counts: 8,
      instructions_follower: 'Follow the ball movements.',
      instructions_lead: 'Guide the ball style clearly.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 75,
      style_id: 1,
      name: 'La Pelota Clave',
      level: 'Improver',
      synonyms: 'Key Ball',
      translation: 'La Pelota Clave',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start from a basic step',
      contains: 'Key ball motion',
      based_on: 'La Pelota',
      similar_to: 'Ball Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the key ball movements.',
      instructions_lead: 'Lead through the key motions effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 76,
      style_id: 1,
      name: 'La Pelota Loca',
      level: 'Improver',
      synonyms: 'Crazy Ball',
      translation: 'La Pelota Loca',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start from a basic position',
      contains: 'Crazy ball motion',
      based_on: 'La Pelota',
      similar_to: 'Ball Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the crazy ball movements.',
      instructions_lead: 'Lead through the chaotic motions.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 77,
      style_id: 1,
      name: "Ni Pa'ti Ni Pa'mi",
      level: 'Improver',
      synonyms: 'Neither For You Nor For Me',
      translation: "Ni Pa'ti Ni Pa'mi",
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Begin with a basic step',
      contains: 'Neutral movement',
      based_on: 'Basic Step',
      similar_to: 'Neutral Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the neutral lead.',
      instructions_lead: 'Guide through the neither movements.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 78,
      style_id: 1,
      name: 'Paulito',
      level: 'Improver',
      synonyms: 'Little Paul',
      translation: 'Paulito',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start from a basic position',
      contains: 'Paul-themed movement',
      based_on: 'Basic Step',
      similar_to: 'Unique Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the Paul movements.',
      instructions_lead: 'Lead with the Paul style effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 79,
      style_id: 1,
      name: 'Prima',
      level: 'Improver',
      synonyms: 'Cousin',
      translation: 'Prima',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start with a basic step',
      contains: 'Cousin-themed movements',
      based_on: 'Basic Step',
      similar_to: 'Cousin Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the cousin movements.',
      instructions_lead: 'Guide through the cousin style effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 80,
      style_id: 1,
      name: 'Prima Con La Hermana',
      level: 'Improver',
      synonyms: 'Cousin with Sister',
      translation: 'Prima Con La Hermana',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Begin in closed position',
      contains: 'Cousin and sister movements',
      based_on: 'Prima',
      similar_to: 'Cousin Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the cousin and sister lead.',
      instructions_lead: 'Lead through the family-style motions.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 81,
      style_id: 1,
      name: 'Siete',
      level: 'Improver',
      synonyms: 'Seven',
      translation: 'Siete',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start with a basic step',
      contains: 'Seven count movement',
      based_on: 'Basic Step',
      similar_to: 'Number Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the seven count lead.',
      instructions_lead: 'Lead the seven count effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 82,
      style_id: 1,
      name: 'Siete Doble',
      level: 'Improver',
      synonyms: 'Double Seven',
      translation: 'Siete Doble',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Begin in closed position',
      contains: 'Double seven motion',
      based_on: 'Siete',
      similar_to: 'Double Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the double seven lead.',
      instructions_lead: 'Guide through the double movements effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 83,
      style_id: 1,
      name: 'Taro Sin Soltarla',
      level: 'Improver',
      synonyms: 'Taro Without Letting Go',
      translation: 'Taro Sin Soltarla',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start from a basic position',
      contains: 'Taro-style movement without letting go',
      based_on: 'Taro',
      similar_to: 'Taro',
      bar_counts: 8,
      instructions_follower: 'Follow the Taro movements without letting go.',
      instructions_lead: 'Guide through the Taro style effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 84,
      style_id: 1,
      name: 'Treinta Y Tres',
      level: 'Improver',
      synonyms: 'Thirty-Three',
      translation: 'Treinta y Tres',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Begin in closed position',
      contains: 'Thirty-three count motion',
      based_on: 'Basic Step',
      similar_to: 'Number Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the thirty-three count lead.',
      instructions_lead: 'Lead through the thirty-three movements.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 85,
      style_id: 1,
      name: 'Un Fly',
      level: 'Improver',
      synonyms: 'A Fly',
      translation: 'Un Fly',
      move_type: 'Basic',
      rueda_sign: 'N/A',
      starts_with: 'Start from a basic position',
      contains: 'Fly movement',
      based_on: 'Basic Step',
      similar_to: 'Unique Moves',
      bar_counts: 4,
      instructions_follower: 'Follow the fly movements.',
      instructions_lead: 'Lead through the fly style effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 86,
      style_id: 1,
      name: 'Vacilala',
      level: 'Improver',
      synonyms: 'Show Off',
      translation: 'Vacílala',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Begin with a basic step',
      contains: 'Show off motion',
      based_on: 'Basic Step',
      similar_to: 'Show Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the show-off lead.',
      instructions_lead: 'Guide the show-off movements effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 87,
      style_id: 1,
      name: 'Vacilala con la Mano',
      level: 'Improver',
      synonyms: 'Show Off with the Hand',
      translation: 'Vacílala con la Mano',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start from a basic position',
      contains: 'Hand show-off motion',
      based_on: 'Vacilala',
      similar_to: 'Show Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the hand show-off lead.',
      instructions_lead: 'Lead through the hand movements effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 88,
      style_id: 1,
      name: 'Vacilala Doble',
      level: 'Improver',
      synonyms: 'Double Show Off',
      translation: 'Vacílala Doble',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Begin with a basic step',
      contains: 'Double show-off motion',
      based_on: 'Vacilala',
      similar_to: 'Show Moves',
      bar_counts: 8,
      instructions_follower: 'Follow the double show-off lead.',
      instructions_lead: 'Guide through the double movements effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 89,
      style_id: 1,
      name: 'Vacilala Y Dame',
      level: 'Improver',
      synonyms: 'Show Off and Give Me',
      translation: 'Vacílala y Dame',
      move_type: 'Combination',
      rueda_sign: 'N/A',
      starts_with: 'Start from a basic position',
      contains: 'Show-off and giving motion',
      based_on: 'Vacilala',
      similar_to: 'Dame',
      bar_counts: 8,
      instructions_follower: 'Follow the show-off and giving lead.',
      instructions_lead: 'Lead through the combined movements effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
    {
      id: 90,
      style_id: 1,
      name: 'Yogur',
      level: 'Improver',
      synonyms: 'Yogurt',
      translation: 'Yogur',
      move_type: 'Basic',
      rueda_sign: 'N/A',
      starts_with: 'Begin with a basic step',
      contains: 'Yogurt-style movement',
      based_on: 'Basic Step',
      similar_to: 'Unique Moves',
      bar_counts: 4,
      instructions_follower: 'Follow the yogurt movements.',
      instructions_lead: 'Guide through the yogurt style effectively.',
      source: 'Salsayo',
      variations: 'N/A',
    },
  ])
}
