const mongoose = require('mongoose')

const RecipesSchema=new mongoose.Schema({
     categoryRecipe:String,
    nameRecipe:String,
    instructions:Array 
})

module.exports=mongoose.model('recipe',RecipesSchema)