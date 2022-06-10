import db from '../config/db.js';
import { v4 as uuid } from 'uuid';

//page to login
export async function loginController(req, res) {
    try {
        const { userId, user } = res.locals;
        const token = uuid();

        await db.query(`
            INSERT INTO sessions (user_id, token)
            VALUES ($1, $2)
        `, [userId, token]);
        res.status(200).send({ ...user, token });

    } catch (e) {
        return messageError('Error on login', e, res);
    }
}
    
