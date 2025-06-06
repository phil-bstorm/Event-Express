import { Router } from 'express';
import welcomeController from '../controllers/welcome.controller';
import authController from '../controllers/auth.controller';
import utilisateurController from '../controllers/utilisateur.controller';

const routes = Router();

routes.route('/welcome').get(welcomeController.home);

routes.route('/auth/login').post(authController.login);
routes.route('/auth/register').post(authController.register);

routes.route('/user/consumer').get(utilisateurController.consumer);
routes.route('/user').get(utilisateurController.userList);
routes.route('/user/:id').get(utilisateurController.userDetail);

export default routes;
