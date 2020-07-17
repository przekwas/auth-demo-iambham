import * as passport from 'passport';
import { Router } from 'express';

const router = Router();

router.get('/', passport.authenticate('jwt'), (req, res) => {
	// req.user.id
	res.json({ msg: 'This is some data!' });
});

export default router;
