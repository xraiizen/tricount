import React, { useState } from 'react';
import { createUser } from '../services/api';

const UserCreate = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser({ firstName, lastName, email });
      setSuccess(true);
      setError('');
      setFirstName('');
      setLastName('');
      setEmail('');
    } catch (error) {
      setSuccess(false);
      setError('Une erreur est survenue lors de la création de l\'utilisateur.');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Créer un utilisateur</h2>

      {success && <p style={successMessageStyle}>L'utilisateur a été enregistré avec succès.</p>}
      {error && <p style={errorMessageStyle}>{error}</p>}

      <form onSubmit={handleFormSubmit}>
        <label style={labelStyle}>
          Prénom:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Nom:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default UserCreate;
