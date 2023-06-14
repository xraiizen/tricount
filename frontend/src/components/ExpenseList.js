import React, { useEffect, useState } from 'react';
import { getExpenses, getUserByID, getCategoryByID } from '../services/api';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [paidByUser, setPaidByUser] = useState(null);
  const [forWhomUser, setForWhomUser] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const expenses = await getExpenses();
      setExpenses(expenses);
      for (const expense of expenses) {
        const paidBy = await getUserByID(expense.paidBy);
        setPaidByUser(paidBy);
        const forWhom = await getUserByID(expense.forWhom[0]);
        setForWhomUser(forWhom);
        const category = await getCategoryByID(expense.category);
        setCategory(category);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des dépenses :', error.message);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const sortedExpenses = expenses.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Liste des dépenses</h2>
      {sortedExpenses.length > 0 ? (
        <ul style={listStyle}>
          {expenses.map((expense) => (
            <li key={expense._id} style={expenseItemStyle}>
              <div>Date : {formatDate(expense.date)}</div>
              <div>Montant : {expense.amount}€</div>
              <div>Payé par : {paidByUser && `${paidByUser.firstName} ${paidByUser.lastName}`}</div>
              <div>Pour qui : {forWhomUser && `${forWhomUser.firstName} ${forWhomUser.lastName}`}</div>
              <div>Catégorie : {category && category.name}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={noExpensesStyle}>Aucune dépense enregistrée.</p>
      )}
    </div>
  );
};

// Styles
const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '16px',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const expenseItemStyle = {
  marginBottom: '16px',
  padding: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const noExpensesStyle = {
  marginTop: '16px',
  color: '#999',
};

export default ExpenseList;
