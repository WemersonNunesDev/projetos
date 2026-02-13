import jwt from 'jsonwebtoken';
import { unauthorized } from './errors';

const config = useRuntimeConfig();

export function signToken(payload) {
    return jwt.sign(
        payload, 
        config.JWT_SECRET, 
        { expiresIn: config.JWT_EXPIRES_IN }
    )
}

export function verifyToken(token) {
    try {
        return jwt.verify(token, config.JWT_SECRET)
    } catch {
        throw unauthorized('Token inválido')
    }
}