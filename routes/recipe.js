const express = require('express');
const router = express.Router();

// GET /recipes - Retrieve all recipes
router.get('/', (req, res) => {
  res.send('List of all recipes');
});

// GET /recipes/:id - Retrieve a specific recipe by ID
router.get('/:id', (req, res) => {
  const recipeId = req.params.id;
  res.send(`Details of recipe with ID: ${recipeId}`);
});

// POST /recipes - Create a new recipe
router.post('/', (req, res) => {
  const newRecipe = req.body;
  // Logic to save the new recipe
  res.send('New recipe created');
});

// PUT /recipes/:id - Update an existing recipe
router.put('/:id', (req, res) => {
  const recipeId = req.params.id;
  const updatedRecipe = req.body;
  // Logic to update the recipe
  res.send(`Recipe with ID: ${recipeId} updated`);
});

// DELETE /recipes/:id - Delete a recipe
router.delete('/:id', (req, res) => {
  const recipeId = req.params.id;
  // Logic to delete the recipe
  res.send(`Recipe with ID: ${recipeId} deleted`);
});

module.exports = router;
