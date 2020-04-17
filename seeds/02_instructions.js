
exports.seed = async function(knex) {

  const testInstructions = [
    { recipe_id: 1, step_number: 1, step_instructions: "Boil water, add a teaspoon of instant coffee to a cup, pour hot water over it. Enjoy."},
    { recipe_id: 2, step_number: 2, step_instructions: "Pour your favorite cereal into a bowl. Add milk to taste. Enjoy."}
  ]
  // Deletes ALL existing entries
  await knex('instructions').truncate()
   
      // Inserts seed entries
      return knex('instructions').insert(testInstructions);
};
