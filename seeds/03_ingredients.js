
exports.seed = async function(knex) {

  const testIngredients = [
    { name: 'teaspoon of instant coffee' },
    { name: 'box your favorite cereal' },
    { name: 'jug of milk' }
  ]
  // Deletes ALL existing entries
  await knex('ingredients').truncate()
    
      // Inserts seed entries
      return knex('ingredients').insert(testIngredients);
};
