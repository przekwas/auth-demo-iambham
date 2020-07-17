import * as passport from 'passport';
import { Router } from 'express';
import type { ReqUser } from '../../utils/types';

const router = Router();

router.get('/', passport.authenticate('jwt'), (req: ReqUser, res) => {
	res.json({ msg: 'This is some data!', userid: req.user.id });
});

export default router;
