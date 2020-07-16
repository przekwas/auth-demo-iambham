import { Query } from '../';

const all = () => Query('', []);

const one = () => Query('', []);

const insert = (newUser: any) => Query('INSERT INTO users SET ?', newUser);

const update = () => Query('', []);

const destroy = () => Query('', []);


export default {
    all,
    one,
    insert,
    update,
    destroy
}