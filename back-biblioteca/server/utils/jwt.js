import jwt from 'jsonwebtoken';
import { unauthorized } from './errors';

const JWT_SECRET = process.env.JWT_SECRET

export function signToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' })
}

export function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET)
    } catch {
        throw unauthorized('Token inválido')
    }
}