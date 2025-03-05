
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


