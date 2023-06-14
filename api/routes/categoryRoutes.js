const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Créer une catégorie de dépense
router.post('/', categoryController.createCategory);

// Récupérer toutes les catégories de dépense
router.get('/', categoryController.getAllCategories);

// GET /categories/:id
router.get('/:id', categoryController.getCategoryByID);

module.exports = router;
