import { Request, Response } from 'express';

const welcomeController = {
    home: (req: Request, res: Response) => {
        res.status(200).json({
            message: 'Welcome to the Express.js API!',
        });
    },
};

export default welcomeController;
