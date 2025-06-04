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
npm install express
npm install typescript tsx @types/node @types/express --save-dev
```

## Configuration de TypeScript

Générez un fichier de configuration TypeScript (`tsconfig.json`) en exécutant la commande suivante :

```bash
npx tsc --init
```
