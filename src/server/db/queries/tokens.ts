import { Query } from '../';

const all = () => Query('', []);

const one = () => Query('', []);

const insert = (payload: any) => Query('INSERT INTO tokens SET ?', payload);

const update = (token: string, id: number) => Query('UPDATE tokens SET token = ? WHERE id = ?', [token, id]);

const destroy = () => Query('', []);


export default {
    all,
    one,
    insert,
    update,
    destroy
}