import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import config from '../config';
import db from '../db';
import type { IPayload } from './types';


export const createToken = async (payload: IPayload) => {
    payload.uniq = crypto.randomBytes(12).toString('hex');
    const result = await db.tokens.insert(payload);
    payload.id = result.insertId;
    const token = jwt.sign(payload, config.auth.secret, { expiresIn: '15d' });
    await db.tokens.update(token, result.insertId);
    return token;
}