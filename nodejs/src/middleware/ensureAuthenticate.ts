import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthenticate(request: Request, response: Response, next: NextFunction): void {
    const auth = request.headers.authorization;

    if (!auth) {
        throw new Error("jwt token is missing");
    }

    const [, token] = auth.split(' ');

    try {
        const decoded = verify(token, authConfig.jwt.secret);

        const { sub } = decoded as TokenPayload;

        request.user = {
            id: sub
        }

        return next();

    } catch  {
        throw new Error("invalid jwt token");
    }
}