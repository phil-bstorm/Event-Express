import { Router } from 'express';
import systemRouter from './system.router';
import utilisateurRouter from './utilisateur.router';
import authRouter from './auth.router';

const mainRouter = Router();

mainRouter.use('/system', systemRouter);
mainRouter.use('/utilisateur', utilisateurRouter);
mainRouter.use('/auth', authRouter);

export default mainRouter;
