const express=require('express');
const router=express.Router();

const {addRecipe,getAllRecipe, deleteRecipe, getUserById}=require('../controllers/recipeController');

router.post('/',addRecipe);
router.get('/',getAllRecipe);
router.delete('/:_id',deleteRecipe)
router.get('/:_id', getRecipeById);
module.exports=router;