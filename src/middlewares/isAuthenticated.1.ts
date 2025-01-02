import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface Payload {
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({ error: 'JWT token is missing' });
    }

    const [, token] = authToken.split(" ");

    try {
        // Validar token
        const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

        // Recupera id e coloca dentro da variável user_id
        req.user_id = sub;

        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid JWT token' });
    }
}