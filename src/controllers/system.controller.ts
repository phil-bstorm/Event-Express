import type { Request, Response } from 'express';

const systemController = {
    home: (req: Request, res: Response) => {
        res.status(200).json({
            message: 'Welcome to the home page',
        });
    },
};

export default systemController;
