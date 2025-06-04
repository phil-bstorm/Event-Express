import 'dotenv/config';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import mainRouter from './routers';

import { AppDataSource } from './core/database';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger/swagger';
import { JwtMiddleware } from './middlwares/jwt.middleware';

const { NODE_ENV, PORT } = process.env;

async function startServer() {
    //! Initialisation de la base de données
    await AppDataSource.initialize();

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

    //? JWT Middleware
    app.use(JwtMiddleware);

    //! Routing
    app.use('/api', mainRouter);

    //! Swagger
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
