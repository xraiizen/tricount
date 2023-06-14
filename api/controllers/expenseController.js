const Expense = require('../models/Expense');

// Créer une dépense
exports.createExpense = async (req, res) => {
  try {
    const { paidBy, amount, date, forWhom, category } = req.body;

    const expense = new Expense({
      paidBy,
      amount,
      date,
      forWhom,
      category
    });

    await expense.save();

    res.status(201).json({ message: 'Expense created successfully', expense });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while creating the expense' });
  }
};

// Récupérer toutes les dépenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    console.log(expenses);
    res.json(expenses);
  } catch (error) {
    console.log(error);
    res.status(500).error;
    res.status(500).json({ error: 'An error occurred while retrieving the expenses' });
  }
};

// Mettre à jour une dépense
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { paidBy, amount, date, forWhom, category } = req.body;

    const expense = await Expense.findByIdAndUpdate(
      id,
      { paidBy, amount, date, forWhom, category },
      { new: true }
    );

    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.json({ message: 'Expense updated successfully', expense });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the expense' });
  }
};

// Supprimer une dépense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findByIdAndDelete(id);

    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the expense' });
  }
};
