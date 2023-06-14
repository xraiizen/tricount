const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Créer une dépense
router.post('/', expenseController.createExpense);

// Récupérer toutes les dépenses
router.get('/', expenseController.getAllExpenses);

// Mettre à jour une dépense
router.put('/:id', expenseController.updateExpense);

// Supprimer une dépense
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;
