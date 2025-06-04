import swaggerJSDoc from 'swagger-jsdoc';
import { Options } from 'swagger-jsdoc';

const options: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Express avec Swagger',
            version: '1.0.0',
            description: "Documentation de l'API ExpressJS avec Swagger",
        },
        servers: [{ url: `http://localhost:${process.env.PORT}/api` }],
    },
    apis: ['./src/**/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
