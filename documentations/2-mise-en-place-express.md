# Mise en place de Express.js

## `app.ts` le point d'entrée de l'application

Créez un nouveau dossier `src` à la racine de votre projet pour y placer vos fichiers TypeScript. À l'intérieur de ce dossier, créez un fichier `app.ts` qui servira de point d'entrée pour votre application Express.

Contenu du fichier `src/app.ts` :

```typescript
import 'dotenv/config';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// import mainRouter from './routers';

const { NODE_ENV, PORT } = process.env;

async function startServer() {
    //! Mise en place de la Web API
    const app = express();

    //! App middleware
    //? Logger
    app.use(morgan('tiny'));

    //? Cors
    app.use(
        cors(
            NODE_ENV === 'production'
                ? {
                      origin: process.env.CORS_ORIGIN,
                      credentials: true,
                  }
                : {
                      origin: '*',
                      credentials: true,
                  },
        ),
    );

    //? Body parser
    app.use(express.json());

    //! Routing
    // app.use('/api', mainRouter);

    //! Démarrage de la Web API
    app.listen(PORT, () => {
        console.log(
            `Web API is running on  http://localhost:${PORT} (${NODE_ENV})`,
        );
        console.log(
            `Web API doc is running on  http://localhost:${PORT}/api/docs (${NODE_ENV})`,
        );
    });
}

startServer().catch((error) => {
    console.error('Error starting the server:', error);
    process.exit(1);
});
```

1. `import 'dotenv/config';` : Cette ligne importe les variables d'environnement définies dans un fichier `.env`, permettant ainsi de configurer l'application sans avoir à modifier le code source.
2. **Importation des modules** : Le code commence par importer les modules nécessaires, y compris `dotenv` pour la gestion des variables d'environnement, `express` pour le framework web, `morgan` pour la journalisation HTTP, et `cors` pour la gestion des requêtes CORS.
3. **Configuration de l'application** : Une instance d'Express est créée, et plusieurs middlewares sont configurés :
    - `morgan` pour la journalisation des requêtes HTTP.
    - `cors` pour gérer les requêtes CORS, avec des configurations différentes selon l'environnement (production ou développement).
    - `express.json()` pour parser les corps des requêtes en JSON.
4. **Routing** : Le code prévoit un routeur principal (commenté pour l'instant) qui sera utilisé pour gérer les routes de l'API.
5. **Démarrage du serveur** : Le serveur écoute sur le port spécifié dans les variables d'environnement et affiche un message de confirmation dans la console.
6. **Gestion des erreurs** : Si une erreur se produit lors du démarrage du serveur, elle est capturée et un message d'erreur est affiché dans la console.

## Routeurs

Les routeurs sont utilisés pour organiser les routes de l'application. Ils permettent de séparer la logique de gestion des routes en différents fichiers, facilitant ainsi la maintenance et la lisibilité du code.
Créez un dossier `routers` à l'intérieur du dossier `src`. À l'intérieur de ce dossier, créez un fichier `index.ts` qui servira de point d'entrée pour les routeurs.

Contenu du fichier `src/routers/index.ts` :

```typescript
import { Router } from 'express';

const routes = Router();

// On ajoutera les routes ici

export default routes;
```

🔎 nous pouvons maintenant décommenter la ligne `app.use('/api', mainRouter);` ainsi que son import dans le fichier `app.ts` pour activer le routeur principal.

## Première route (et controleur)

Pour notre première route, nous allons créer un contrôleur simple qui renvoie un message de bienvenue lorsqu'un utilisateur accède à la route `/api/welcome`.
Créez un dossier `controllers` à l'intérieur du dossier `src`. À l'intérieur de ce dossier, créez un fichier `welcomeController.ts`.
Contenu du fichier `src/controllers/welcomeController.ts` :

```typescript
import { Request, Response } from 'express';

const welcomeController = {
    home: (req: Request, res: Response) => {
        res.status(200).json({
            message: 'Welcome to the Express.js API!',
        });
    },
};

export default welcomeController;
```

- `import { Request, Response } from 'express';` : Cette ligne importe les types `Request` et `Response` d'Express, qui sont utilisés pour typer les paramètres des fonctions de gestion des requêtes.
- `export const welcomeController = { ... }` : Cette ligne crée un objet `welcomeController` qui contient une méthode `home`. Cet objet est exporté pour être utilisé dans d'autres parties de l'application.
- `home: (req: Request, res: Response) => { ... }` : Cette méthode est une fonction qui prend en paramètres un objet `Request` et un objet `Response`. Elle envoie une réponse JSON avec un message de bienvenue lorsque la route est accédée.
    - `req` : Représente la requête HTTP entrante. (par exemple, les paramètres de la requête, les en-têtes, etc.)
    - `res` : Représente la réponse HTTP que l'application envoie au client.
- `res.status(200).json({ message: 'Welcome to the Express.js API!' });` : Cette ligne envoie une réponse HTTP avec le statut 200 (OK) et un objet JSON contenant le message de bienvenue.

## Ajout de la route dans le routeur

Pour ajouter la route `/api/welcome` qui utilise le contrôleur `welcomeController`, modifiez le fichier `src/routers/index.ts` comme suit :

```typescript
import { Router } from 'express';
import welcomeController from '../controllers/welcome.controller'; // Import du contrôleur de bienvenue

const routes = Router();

routes.route('/welcome').get(welcomeController.home); // Ajout de la route pour le contrôleur de bienvenue

export default routes;
```

- `import welcomeController from '../controllers/welcome.controller';` : Cette ligne importe le contrôleur `welcomeController` depuis le fichier `welcome.controller.ts`.
- `routes.route('/welcome').get(welcomeController.home);` : Cette ligne ajoute une route GET pour `/api/welcome` qui utilise la méthode `home` du contrôleur `welcomeController`. Lorsque cette route est accédée, la méthode `home` sera exécutée, renvoyant le message de bienvenue.

## Test de la route

Ouvrez votre navigateur ou un outil comme Postman, et accédez à l'URL suivante :

[http://localhost:3000/api/welcome](http://localhost:3000/api/welcome)
