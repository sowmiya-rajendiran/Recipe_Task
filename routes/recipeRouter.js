const express = require('express');
const { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } = require('../controller/recipeController');

const recipeRouter = express.Router();

recipeRouter.get('/' , getAllRecipes);

recipeRouter.get('/:id' , getRecipeById);

recipeRouter.post('/' , createRecipe);

recipeRouter.put('/:id' , updateRecipe);

recipeRouter.delete('/:id' , deleteRecipe);

module.exports = recipeRouter;