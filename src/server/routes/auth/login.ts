import * as passport from 'passport';
import { Router } from 'express';
import { createToken } from '../../utils/tokens';
import type { ReqUser } from '../../utils/types';

const router = Router();

router.post('/', passport.authenticate('local'), async (req: ReqUser, res) => {
    console.log(req.user);
    const token = await createToken({ userid: req.user.id });
    res.json({ msg: 'user logged in', token });
});

export default router;