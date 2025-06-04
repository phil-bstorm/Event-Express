# installation de TypeORM avec PostgreSQL

npm install typeorm --save
npm install reflect-metadata --save
npm install pg --save

# configuration

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

# création de la base de données et des models

WIP
