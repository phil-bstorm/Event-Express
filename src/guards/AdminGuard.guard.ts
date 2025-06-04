import { NextFunction, Request, Response } from 'express';
import { Token } from '../core/models/token.model';

export const AdminGuard = async (
    req: Request & { token: Token },
    res: Response,
    next: NextFunction,
) => {
    const token = req.token;

    if (!token) {
        res.sendStatus(401);
        return;
    }

    if (token.role === 'admin') {
        next();
    } else {
        res.sendStatus(403);
    }
};
