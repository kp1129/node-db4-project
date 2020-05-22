const db = require('./connection');

module.exports = {

    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id){
// should return a list of all ingredients and quantities for a given recipe
    return db('recipe_ingredients')
        .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
        .select('ingredients.name', 'recipe_ingredients.quantity')
        .where({ recipe_id })       
}

function getInstructions(recipe_id) {
// should return a list of step by step instructions for preparing a recipe
    return db('instructions').where({ recipe_id })
}