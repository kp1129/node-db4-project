
exports.seed = async function(knex) {

  const testRecipes = [
    { title: "morning coffee on the go" },
    { title: "cereal YUMMM"}
  ]
  // Deletes ALL existing entries
  await knex('recipes').truncate()
   
  return knex('recipes').insert(testRecipes);
};
