import { Router } from 'express';
import utilisateurController from '../controllers/utilisateur.controller';
import { AuthenticatedGuard } from '../guards/AuthenticateGuard.guard';
import { AdminGuard } from '../guards/AdminGuard.guard';

const utilisateurRouter = Router();

utilisateurRouter
    .route('/consumer')
    .get(AuthenticatedGuard, utilisateurController.consumer);

utilisateurRouter.route('/').get(AdminGuard, utilisateurController.userList);

utilisateurRouter
    .route('/:id')
    .get(AdminGuard, utilisateurController.userDetail);

export default utilisateurRouter;
