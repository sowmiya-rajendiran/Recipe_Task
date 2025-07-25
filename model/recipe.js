const { default: mongoose } = require("mongoose");


// create schema with Validation
const recipeSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true , "Title is Required"],
        trim: true,
        minlength: [3, "Title must be at least 3 characters"]
    },
    ingredients : {
        type :[String],
        required: [true, "Ingredients are required"],
        validate : {
            validator : function(arr){
                return arr.length > 0;
            },
            message: "At least one ingredient is required"
        }
    },
    isVegetarian : {
        type : Boolean,
        required: true
    },
    cookTime : {
        type :Number,
        required: true,
        min: [1, "Cook time must be at least 1 minute"]
    },
    servings : {
        type : Number,
        required: true,
        min: [1, "Servings must be at least 1"]
    }
})

// create Model
const recipeModel = mongoose.model('recipe',recipeSchema,'recipes') ;

// Export Modal
module.exports = recipeModel ;