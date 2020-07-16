import { Router } from 'express';
import db from '../../db';
import { generateHash } from '../../utils/passwords';
import { createToken } from '../../utils/tokens';

const router = Router();

router.post('/',  async (req, res) => {

    const newUser = req.body;
    newUser.password = generateHash(newUser.password);

    try {
        const result = await db.users.insert(newUser);
        const token = await createToken({ userid: result.insertId });
        res.json({ msg: 'new user registered', result, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'server error, my code sucks :(', error });
    }
});

export default router;