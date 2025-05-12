import { Router } from 'express';
import systemController from '../controllers/system.controller';

const systemRouter = Router();

systemRouter.route('/').get(systemController.home);

export default systemRouter;
