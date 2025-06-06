# Mise en place de la base de données

## installation de TypeORM avec PostgreSQL

```bash
npm install typeorm
npm install reflect-metadata
npm install pg
```

## configuration

in app.ts:

```typescript
import 'reflect-metadata';
```

Dans le fichier tsconfig.json:

```json
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
"strict": false,
```

## Création de l'instance de la base de données

Créer un dossier `src/database` et un fichier `index.ts` à l'intérieur.
