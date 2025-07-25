## postman documantation : https://documenter.getpostman.com/view/45904223/2sB34oBwyR

## 🍽️ 🍲 Recipes CRUD Application
- A full-featured RESTful API built with Node.js, Express.js, and MongoDB for managing recipes. This project follows the MVC (Model-View-Controller) architecture and includes Postman documentation for all endpoints.

## 📌 Features
- ✅ Create a new recipe
- 📄 View all recipes
- 🔍 View a recipe by ID
- ✏️ Update a recipe by ID
- ❌ Delete a recipe by ID

## 🧱 Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose ODM(object document modal)
- Architecture: MVC Pattern (Modal View Controller)
- Documentation: Postman (Collection included)

## 🛠️ How It Works
- This application follows the MVC (Model-View-Controller) architecture and uses Express.js for routing, Mongoose for data modeling, and MongoDB as the database.

- 🔁 Request Flow
    - Client Sends Request
    - A request is made to an API endpoint, such as POST /api/recipes.

- Routing (Express Router)
    - The request is routed via recipeRouter.js which maps the endpoint to the correct controller function.

- Controller Handles Logic
    - The controller (recipeController.js) contains the logic for handling the request—e.g., creating, fetching, updating, or deleting a recipe.

- Model Interacts with Database
    - The Mongoose model schema is designed with proper validation rules to ensure all recipe data is accurate and complete.
    - The controller uses the Mongoose model (recipe.js) to interact with MongoDB—performing operations like .save(), .find(), .findByIdAndUpdate(), findById() , findByIdAndDelete().

- Response is Returned
    - The result is sent back to the client as a JSON response, often with appropriate HTTP status codes (e.g., 200 OK, 201 Created, 404 Not Found, etc.).

## Deployed Link
- 