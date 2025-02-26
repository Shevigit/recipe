const express=require('express');
const router=express.Router();

const {addRecipe, deleteRecipe, updateRecipe,getAllRecipe}=require('../controllers/recipeController');

router.post('/',addRecipe);
router.delete('/',deleteRecipe);
router.put('/',updateRecipe);
router.get('/',getAllRecipe);
module.exports=router;