const express = require('express');

const Recipes = require('./recipesModel');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json({ errorMessage: "could not retrieve recipes"}))
})

module.exports = router;