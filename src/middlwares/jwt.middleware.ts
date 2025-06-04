/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Token } from '../core/models/token.model';

export const JwtMiddleware = (
    req: Request & { token: Token },
    res: Response,
    next: NextFunction,
) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    try {
        const payload = jwt.verify(token!, process.env.JWT_SECRET!);
        req.token = payload as Token;
        next();
    } catch (error) {
        next();
    }
};
