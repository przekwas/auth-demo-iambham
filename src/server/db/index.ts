import * as mysql from 'mysql';
import config from '../config';
import users from './queries/users';
import tokens from './queries/tokens';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
	return new Promise<T>((resolve, reject) => {
		const sql = mysql.format(query, values);
		console.log(sql);

		pool.query(sql, (err, results) => {
			if (err) {
				reject(err);
			} else {
				resolve(results);
			}
		});
	});
};

export default {
    users,
    tokens
}