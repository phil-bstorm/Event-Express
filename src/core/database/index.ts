import 'reflect-metadata';

import { DataSource } from 'typeorm';
import { Utilisateur } from './models/utilisateur.model';
import { Evenement } from './models/evenement.model';
import { Invitation } from './models/invitation.model';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: +process.env.DB_PORT!,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Utilisateur, Evenement, Invitation],
});

export const utilisateurRepo = AppDataSource.getRepository(Utilisateur);
export const evenementRepo = AppDataSource.getRepository(Evenement);
