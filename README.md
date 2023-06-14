# Projet de Gestion de Collocation

Ce projet vise à créer une application permettant de gérer les dépenses d'une collocation. L'objectif est de développer une version réduite d'une application comme Tricount.

## Technologies utilisées

- **React** : un framework JavaScript pour le développement d'applications.
- **Axios** : une bibliothèque HTTP pour effectuer des requêtes depuis l'application.
- **Node.js** : une plateforme permettant d'exécuter du code JavaScript côté serveur.
- **Express** : un framework web minimaliste pour créer des API en Node.js.
- **MongoDB** : une base de données NoSQL pour stocker les données de l'application.

## Installation

1. Assurez-vous d'avoir [Node.js](https://nodejs.org) installé sur votre machine.

2. Clonez ce repository :

```bash
git clone https://github.com/xraiizen/tricount.git
   ```
Accédez au dossier de l'API :

```bash

cd api
```
Installez les dépendances :

```bash

npm install
```
Configurez la base de données :

Assurez-vous que MongoDB est installé et en cours d'exécution sur votre machine.
Modifiez le fichier services/database.js avec les informations de connexion à votre base de données MongoDB.
Lancez l'API :

```bash

npm start
```
Accédez au dossier du frontend :

```bash

cd ../frontend
```
Installez les dépendances :

```bash

npm install
```
Modifiez le fichier src/services/api.js dans le dossier src avec l'URL de votre API variable "API_BASE_URL".

Lancez l'application :

```bash
npm start
```
Fonctionnalités    
Enregistrer un utilisateur : permet de créer un nouvel utilisateur avec un nom, un prénom et un email.    
Enregistrer une dépense : permet à un utilisateur d'enregistrer une nouvelle dépense avec les détails tels que le montant, la date, le bénéficiaire et la catégorie.    
Lister les dépenses : affiche la liste complète des dépenses, classées par date de la plus ancienne à la plus récente.    
Créer une catégorie de dépense : permet à un utilisateur de créer une nouvelle catégorie de dépense si celle-ci n'existe pas.    
La balance comptable : affiche pour chaque utilisateur le montant qu'il a payé et le montant qui lui est dû.   


Structure du projet   
- `api/` : le dossier de l'API contenant les fichiers nécessaires pour le serveur Node.js.   
- `frontend/` : le dossier du frontend contenant les fichiers de l'application React Native.   
- `src/` : le dossier source commun contenant les modèles de données, les services et les composants réutilisables.    
- `src/screens/` : le dossier contenant les écrans de l'application.   
-  `src/services/` : le dossier contenant les services de l'application.   
- `src/components/` : le dossier contenant les composants réutilisables.   
- `src/utils/` : le dossier contenant les utilitaires et les fonctions utilitaires.   
- `src/assets/` : le dossier contenant les ressources graphiques telles que les images et les icônes.   

---
Réalisé par [XRAIIZEN]
