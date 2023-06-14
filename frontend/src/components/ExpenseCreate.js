import React, { useState, useEffect } from 'react';
import { getUsers, createExpense, getCategories } from '../services/api';

const ExpenseCreate = ({ refreshExpenseList }) => {
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [paidBy, setPaidBy] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [forWhom, setForWhom] = useState('');
  const [category, setCategory] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch users
    getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });

    // Fetch categories
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      paidBy,
      amount,
      date,
      forWhom,
      category,
    };

    createExpense(expenseData)
      .then(() => {
        setSuccess('Expense created successfully.');
        setError('');
        setPaidBy('');
        setAmount('');
        setDate('');
        setForWhom('');
        setCategory('');
        refreshExpenseList();
      })
      .catch((error) => {
        setSuccess('');
        setError('An error occurred while creating the expense.');
        console.error('Error creating expense:', error);
      });
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Create Expense</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputContainerStyle}>
          <label htmlFor="paidBy" style={labelStyle}>Paid By:</label>
          <select id="paidBy" value={paidBy} onChange={(e) => setPaidBy(e.target.value)} style={selectStyle}>
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.firstName} {user.lastName}
              </option>
            ))}
          </select>
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="amount" style={labelStyle}>Amount:</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} style={inputStyle} />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="date" style={labelStyle}>Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} style={inputStyle} />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="forWhom" style={labelStyle}>For Whom:</label>
          <select id="forWhom" value={forWhom} onChange={(e) => setForWhom(e.target.value)} style={selectStyle}>
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.firstName} {user.lastName}
              </option>
            ))}
          </select>
        </div>        <div style={inputContainerStyle}>
          <label htmlFor="category" style={labelStyle}>Catégorie :</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} style={selectStyle}>
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" style={submitButtonStyle}>Enregistrer</button>
      </form>
      {success && <p style={successMessageStyle}>{success}</p>}
      {error && <p style={errorMessageStyle}>{error}</p>}
    </div>
  );
};

// Styles
const containerStyle = {
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#f9f9f9',
};

const headingStyle = {
  marginBottom: '20px',
  fontSize: '24px',
  fontWeight: 'bold',
};

const formStyle = {"display":"flex","flexDirection":"column","marginBottom":"20px","flexWrap":"wrap","alignContent":"flex-start","justifyContent":"center","alignItems":"stretch"};

const inputContainerStyle = {
  marginBottom: '10px',
};

const labelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '5px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const selectStyle = {
  padding: '5px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const submitButtonStyle = {
  padding: '10px',
  backgroundColor: 'rgb(76, 175, 80)',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const successMessageStyle = {
  color: 'green',
};

const errorMessageStyle = {
  color: 'red',
};

export default ExpenseCreate;

