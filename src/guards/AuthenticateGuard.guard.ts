import { NextFunction, Request, Response } from 'express';
import { Token } from '../core/models/token.model';
import { utilisateurRepo } from '../core/database';
import { Utilisateur } from '../core/database/models/utilisateur.model';

export const AuthenticatedGuard = async (
    req: Request & { token: Token; user: Utilisateur },
    res: Response,
    next: NextFunction,
) => {
    if (req.token) {
        const user = await utilisateurRepo.findOne({
            where: { id: req.token.id },
        });

        if (user) {
            req.user = user;

            next();
            return;
        }
    }
    res.sendStatus(401);
};
