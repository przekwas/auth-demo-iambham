import { Query } from '../';

const all = () => Query('', []);

const one = (id: number) => Query('SELECT * FROM users WHERE id = ?', [id]);

const insert = (newUser: any) => Query('INSERT INTO users SET ?', newUser);

const update = () => Query('', []);

const destroy = () => Query('', []);

const find = (column: string, value: string | number) => Query('SELECT * FROM users WHERE ?? = ?', [column, value]);

export default {
    all,
    one,
    insert,
    update,
    destroy,
    find
}