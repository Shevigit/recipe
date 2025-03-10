const Recipe=require("../models/Recipe")

exports.addRecipe = async(req,res)=>{
    const recipe  = await Recipe.create(req.body);
    res.json(recipe)
}

exports.getAllRecipe = async (req, res) => {
  try {

    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error('Failed to get users:', error);
    res.status(500).json({ message: 'Failed to get users' });
  }
  res.status().json()
};


exports.deleteRecipe = async (req, res) => {
  const {_id}  = req.params;
console.log(_id);
  try {
    const deletedRecipe = await Recipe.findOneAndDelete({ _id: _id });
    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json({ message: 'recipe deleted successfully' });
  } catch (error) {
    console.error('Failed to delete recipe:', error);
    res.status(500).json({ message: 'Failed to delete recipe' });
  }
};