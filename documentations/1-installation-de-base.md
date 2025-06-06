# Installation de Express.js avec TypeScript

## Pré-requis

Avant de commencer, assurez-vous d'avoir installé Node.js et npm sur votre machine. Vous pouvez vérifier leur installation en exécutant les commandes suivantes dans votre terminal :

```bash
node -v
npm -v
```

## Installation des dépendances

Créez un nouveau dossier pour votre projet et initialisez un nouveau projet Node.js avec npm :

```bash
mkdir event-express
cd event-express
npm init -y
```

Ensuite, installez les dépendances nécessaires pour Express.js et TypeScript :

```bash
npm install express cors morgan
npm install typescript tsx @types/node @types/express --save-dev
```

- `express` : le framework web pour Node.js.
- `cors` : un middleware pour gérer les requêtes CORS (Cross-Origin Resource Sharing).
- `morgan` : un middleware de journalisation HTTP pour Express.js.
- `typescript` : le compilateur TypeScript.
- `tsx` : un outil pour exécuter des fichiers TypeScript directement.
- `@types/node` : les types pour Node.js.
- `@types/express` : les types pour Express.js.

## Configuration de TypeScript

Générez un fichier de configuration TypeScript (`tsconfig.json`) en exécutant la commande suivante :

```bash
npx tsc --init
```

Cette commande génère un fichier `tsconfig.json` avec les paramètres par défaut.

## Variables d'environnement

Installez le package `dotenv` pour gérer les variables d'environnement :

```bash
npm install dotenv
```

Créez un fichier `.env` à la racine de votre projet pour stocker vos variables d'environnement.

Les variables d'environnement peuvent inclure des informations sensibles comme les clés API, les configurations de base de données, etc.

(Un exemple de contenu pour `.env` se trouve dans le fichier `.env.example` fourni dans le projet.)

⚠️ Assurez-vous de ne pas committer ce fichier dans votre dépôt Git pour des raisons de sécurité.
