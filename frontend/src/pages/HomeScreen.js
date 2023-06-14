import React from 'react';



const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Projet de Gestion des Dépenses</h1>
      <p style={styles.text}>Bienvenue sur mon application de gestion des dépenses. Cette application vous permet de gérer vos dépenses personnelles, de créer des utilisateurs, des catégories et d'enregistrer vos dépenses.</p>
      <p style={styles.text}>Utilisez les différentes fonctionnalités de l'application pour suivre vos dépenses, connaître le solde entre les utilisateurs et garder une trace de vos transactions financières.</p>
    </div>
  );
};

export default HomePage;
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
    marginBottom: '10px',
  },
};