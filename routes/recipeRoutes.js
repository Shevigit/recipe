const express=require('express');
const router=express.Router();

const {addRecipe,getAllRecipe, deleteRecipe}=require('../controllers/recipeController');

router.post('/',addRecipe);
router.get('/',getAllRecipe);
router.delete('/:_id',deleteRecipe)
module.exports=router;