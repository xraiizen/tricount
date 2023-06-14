const Category = require('../models/Category');

// Créer une catégorie de dépense
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = new Category({ name });

    await category.save();

    res.status(201).json({ message: 'Category created successfully', category });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the category' });
  }
};

// Récupérer toutes les catégories de dépense
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the categories' });
  }
};

// GET /categories/:id
exports.getCategoryByID = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = exports;
