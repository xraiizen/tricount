import React, { useState } from 'react';
import { createCategory } from '../services/api';

const CategoryCreate = () => {
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCategory({ name });
      setSuccess(true);
      setError('');
      setName('');
    } catch (error) {
      setSuccess(false);
      setError('Une erreur est survenue lors de la création de la catégorie.');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Créer une catégorie</h2>

      {success && <p style={successMessageStyle}>La catégorie a été créée avec succès.</p>}
      {error && <p style={errorMessageStyle}>{error}</p>}

      <form onSubmit={handleFormSubmit}>
        <label style={labelStyle}>
          Nom:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        </label>
        <br />
        <button type="submit" style={buttonStyle}>Enregistrer</button>
      </form>
    </div>
  );
};

// Styles
const containerStyle = {
  maxWidth: '400px',
  margin: '0 auto',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '16px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginBottom: '16px',
};

const buttonStyle = {
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const successMessageStyle = {
  color: '#4caf50',
  marginBottom: '16px',
};

const errorMessageStyle = {
  color: 'red',
  marginBottom: '16px',
};

export default CategoryCreate;
