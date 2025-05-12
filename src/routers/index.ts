import { Router } from 'express';
import systemRouter from './system.router';

const mainRouter = Router();

mainRouter.use('/system', systemRouter);

export default mainRouter;
