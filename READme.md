# Securisé un serveur Express

## Introduction

Ce projet a pour but de sécuriser un serveur Express en utilisant des middlewares et des bonnes pratiques de sécurité. Il est important de protéger les applications web contre les attaques courantes telles que les injections SQL, les attaques XSS, CSRF, request rating, etc.

## Objectifs

- Mettre en place des middlewares de sécurité pour protéger le serveur Express.
- Utiliser des bonnes pratiques de sécurité pour protéger les données sensibles.
- Protéger les routes sensibles avec des authentifications et des autorisations.
- Protéger les données sensibles avec des algorithmes de hachage et de cryptage.

## Installation

1. Cloner le dépôt :
   ```bash
   git clone
    cd securise-express-server
   ```
2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Lancer le serveur :
   ```bash
    npm start
   ```
4. Accéder à l'application :
   Ouvrir un navigateur et accéder à `http://localhost:3000`.
5. Tester les routes :
   Utiliser Postman ou un autre outil pour tester les routes de l'API.
   - GET /api/users
   - POST /api/users
   - GET /api/users/:id
   - PUT /api/users/:id
   - DELETE /api/users/:id

## Mise en place du projet

### Installation base de Express

Pour utiliser Typescript avec Express, il existe différentes solutions:

- Via la transcompilation de "typescript"
- Via un "runner" typeScript (ts-node, tsx)
- Via un environnement différent (bun.js, deno)- **(New)** En natif, via le "strip-types" (experimental)

[Documentation TypeScript en Node](https://nodejs.org/en/learn/typescript/introduction) \
Choix pour la démo : le runner « tsx »

#### Packages

```
npm i express@5 morgan cors
npm i -D typescript tsx
npm i -D @types/express@5 @types/node @types/morgan @types/cors
```

#### Config de TypeScript

```
npx tsc --init
```
