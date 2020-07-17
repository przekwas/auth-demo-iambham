import { Request } from 'express';

export interface ReqUser extends Request {
    user: {
        id: number;
    }
}

export interface IPayload {
    id?: number;
    userid?: number;
    uniq?: string;
}