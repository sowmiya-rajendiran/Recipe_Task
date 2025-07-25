const express = require('express');
const recipeRouter = require('./routes/recipeRouter');
const errorRoute = require('./utils/errorRoute');

const app = express();

// body parse using build-in middleware
app.use(express.json());

app.use('/api/v1/recipes' , recipeRouter);

// Route Error Handling
app.use(errorRoute);

module.exports = app;