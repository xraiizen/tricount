import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomeScreen from './pages/HomeScreen';
import UserScreen from './pages/UserScreen';
import CategoryScreen from './pages/CategoryScreen';
import ExpenseScreen from './pages/ExpenseScreen';
import BalanceScreen from './pages/BalanceScreen';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={navStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <Link to="/" style={linkStyle}>Accueil</Link>
            </li>
            <li style={liStyle}>
              <Link to="/users" style={linkStyle}>Utilisateurs</Link>
            </li>
            <li style={liStyle}>
              <Link to="/categories" style={linkStyle}>Catégories</Link>
            </li>
            <li style={liStyle}>
              <Link to="/expenses" style={linkStyle}>Dépenses</Link>
            </li>
            <li style={liStyle}>
              <Link to="/balance" style={linkStyle}>Bilan</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/users" element={<UserScreen />} />
          <Route path="/categories" element={<CategoryScreen />} />
          <Route path="/expenses" element={<ExpenseScreen />} />
          <Route path="/balance" element={<BalanceScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

// Styles
const navStyle = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
};

const liStyle = {
  marginRight: '10px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
};

export default App;
