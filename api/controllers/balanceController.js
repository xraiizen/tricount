const User = require('../models/User');
const Expense = require('../models/Expense');

// Calculer la balance comptable pour chaque utilisateur
exports.calculateBalance = async (req, res) => {
  try {
    const users = await User.find();
    const expenses = await Expense.find();

    const balance = {};

    users.forEach((user) => {
      balance[user._id] = {
        name: user.name,
        totalPaid: 0,
        totalOwed: 0,
      };
    });

    expenses.forEach((expense) => {
      const { paidBy, amount, forWhom } = expense;

      balance[paidBy].totalPaid += amount;

      forWhom.forEach((userId) => {
        balance[userId].totalOwed += amount / forWhom.length;
      });
    });

    res.json(balance);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while calculating the balance' });
  }
};

module.exports = exports;
