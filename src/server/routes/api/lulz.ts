import { Router } from 'express';

const router = Router();

router.get('/',  (req, res) => {
	// req.user.id
	res.json({ msg: 'This is some data!' });
});

export default router;
