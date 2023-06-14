Tricount Clone API
Ce projet est une API pour une application de partage de dépenses appelée Tricount Clone. L'API est construite avec Node.js, Express et MongoDB.

Installation
Cloner le dépôt :
bash
Copy code
git clone https://github.com/votre-utilisateur/tricount-clone-api.git
Accéder au répertoire du projet :
bash
Copy code
cd tricount-clone-api
Installer les dépendances :
bash
Copy code
npm install
Configurer la base de données :

Assurez-vous que MongoDB est installé et en cours d'exécution sur votre machine.
Dans le fichier config.js, vérifiez les paramètres de configuration de la base de données, tels que l'URL de connexion.
Lancer l'API :

bash
Copy code
npm start
L'API sera accessible à l'adresse http://localhost:3000.

Fonctionnement
L'API fournit les fonctionnalités suivantes :

Gestion des utilisateurs :

Création d'un nouvel utilisateur : POST /users
Récupération d'un utilisateur par son ID : GET /users/:id
Mise à jour d'un utilisateur : PUT /users/:id
Suppression d'un utilisateur : DELETE /users/:id
Gestion des dépenses :

Création d'une nouvelle dépense : POST /expenses
Récupération d'une dépense par son ID : GET /expenses/:id
Mise à jour d'une dépense : PUT /expenses/:id
Suppression d'une dépense : DELETE /expenses/:id
Gestion des catégories :

Création d'une nouvelle catégorie : POST /categories
Récupération d'une catégorie par son ID : GET /categories/:id
Mise à jour d'une catégorie : PUT /categories/:id
Suppression d'une catégorie : DELETE /categories/:id
Calcul de la balance :

Récupération de la balance d'un utilisateur : GET /balance/:userId