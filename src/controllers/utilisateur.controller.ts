import type { Request, Response } from 'express';
import { utilisateurRepo } from '../core/database';
import { Token } from '../core/models/token.model';
import { Utilisateur } from '../core/database/models/utilisateur.model';

const utilisateurController = {
    userList: async (req: Request, res: Response) => {
        try {
            const users = await utilisateurRepo.find();
            res.json(users);
        } catch (error) {
            console.log(
                'Erreur lors de la récupération des utilisateurs:',
                error,
            );

            res.status(500).json({ error: 'Erreur serveur' });
        }
    },

    userDetail: async (req: Request, res: Response) => {
        const userId = parseInt(req.params.id, 10);
        try {
            const user = await utilisateurRepo.findOneBy({ id: userId });
            if (!user) {
                res.status(404).json({ error: 'Utilisateur non trouvé' });
                return;
            }
            res.json(user);
        } catch (error) {
            console.log(
                "Erreur lors de la récupération de l'utilisateur:",
                error,
            );
            res.status(500).json({ error: 'Erreur serveur' });
        }
    },

    consumer: async (
        req: Request & { token: Token; user: Utilisateur },
        res: Response,
    ) => {
        const userId = req.user.id;
        try {
            const user = await utilisateurRepo.findOne({
                where: { id: userId },
                relations: {
                    owns: true,
                    participates: true,
                },
            });
            if (!user) {
                res.status(404).json({ error: 'Utilisateur non trouvé' });
                return;
            }
            res.json(user);
        } catch (error) {
            console.log(
                "Erreur lors de la récupération de l'utilisateur:",
                error,
            );
            res.status(500).json({ error: 'Erreur serveur' });
        }
    },
};

export default utilisateurController;
