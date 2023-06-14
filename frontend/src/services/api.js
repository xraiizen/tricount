import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// Fonction pour récupérer la liste des dépenses
export const getExpenses = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/expenses`);
      const expenses = response.data;
      return expenses;
    } catch (error) {
      throw new Error('Erreur lors de la récupération des dépenses.');
    }
  };
// Fonction pour créer une dépense
export const createExpense = (expenseData) => {
  return axios.post(`${API_BASE_URL}/expenses`, expenseData);
};

// Fonction pour mettre à jour une dépense
export const updateExpense = (expenseId, expenseData) => {
  return axios.put(`${API_BASE_URL}/expenses/${expenseId}`, expenseData);
};

// Fonction pour supprimer une dépense
export const deleteExpense = (expenseId) => {
  return axios.delete(`${API_BASE_URL}/expenses/${expenseId}`);
};

// Fonction pour récupérer la liste des utilisateurs
export const getUsers = () => {
  return axios.get(`${API_BASE_URL}/users`);
};

// Fonction pour créer un utilisateur
export const createUser = (userData) => {
  return axios.post(`${API_BASE_URL}/users`, userData);
};

// Fonction pour récupérer les informations d'un utilisateur par ID
export async function getUserByID(userID) {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${userID}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des informations de l\'utilisateur', error);
      throw error;
    }
  }
  
  // Fonction pour récupérer les informations d'une catégorie par ID
  export async function getCategoryByID(categoryID) {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories/${categoryID}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des informations de la catégorie', error);
      throw error;
    }
  }

// Fonction pour récupérer la liste des catégories de dépense
export const getCategories = () => {
  return axios.get(`${API_BASE_URL}/categories`);
};

// Fonction pour créer une catégorie de dépense
export const createCategory = (categoryData) => {
  return axios.post(`${API_BASE_URL}/categories`, categoryData);
};

// Fonction pour récupérer la balance comptable
export const getBalance = () => {
  return axios.get(`${API_BASE_URL}/balance`);
};

export default {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
  getUsers,
  getUserByID,
  createUser,
  getCategoryByID,
  getCategories,
  createCategory,
  getBalance
};
