const recipeModel = require("../model/recipe");

const recipeController = {
    getAllRecipes : async (req , res) => { 
        try{
            const recipes = await recipeModel.find({});
            res.json(recipes);
        }catch(error){
            res.status(500).json({ message: 'Error fetching All Recipes', error: error.message });
        }
    },
    getRecipeById :  async (req , res) => { 
        try{
            const {id} = req.params;
            const getRecipe = await recipeModel.findById(id);
            res.status(200).json(getRecipe);
        } catch(error){
            res.status(500).json({ message: 'Error fetching Recipes By Id', error: error.message })
        }
    },
    createRecipe : async (req , res) => {
        try{
            const {title ,ingredients, isVegetarian , cookTime , servings} = req.body;
        
            const createNewRecipe = new recipeModel ({
                title,
                ingredients,
                isVegetarian,
                cookTime,
                servings
            })

            await  createNewRecipe.save();
            res.status(200).json(createNewRecipe);
        }catch(error){
            res.status(500).json({ message: 'Error creating Recipe', error: error.message });
        }
    },
    updateRecipe : async (req , res) =>{
        try{
            const {id} = req.params;

            //update content
            const {title ,ingredients, isVegetarian , cookTime , servings} = req.body;

            await recipeModel.findByIdAndUpdate(id , {
                title,
                ingredients,
                isVegetarian,
                cookTime,
                servings
            })

            res.status(200).json({message : "Updated Successfully"});

        } catch(error){
            res.status(500).json({ message: 'Error updating Recipe', error: error.message });
        }
    },
    deleteRecipe : async(req , res) =>{
        try{
            const {id} = req.params;

            // find recipe id and delete it
            await recipeModel.findByIdAndDelete(id);
            res.status(200).json({message : "Deleted Successfully"});

        } catch(error){
            res.status(500).json({ message: 'Error deleting Recipe', error: error.message });

        }
    }
}

module.exports = recipeController;