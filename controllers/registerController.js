import db from '../config/db.js';
import bcrypt from 'bcrypt';

export async function registerController(req, res) {
    try {

        const { name, email, password } = req.body;
        const jump = 10;
        const bcryptPassword = bcrypt.hashSync(password, jump);
        await db.query(
            `
          INSERT INTO users (name, email, password)
          VALUES ($1, $2, $3)
        `,
            [name, email, bcryptPassword]
        );
        res.sendStatus(201);

    } catch (error) {
        console.log(error);
        res.sendStatus(422);
    }
}