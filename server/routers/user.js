const express = require('express');

const router = express.Router();
const user = require('../controllers/user');
const auth = require('../controllers/auth');

router
	.route('/api/user/')
	.post(user.create)
	.get(auth.verifyToken, user.get);

router
	.route('/api/user/:id')
	.put(auth.verifyToken, user.update)
	.delete(auth.verifyToken, user.delete);

// router
// 	.route('/api/user/history/:id')
// 	.get(user.getHistory)
// 	.post(user.addToHistory);

module.exports = router;
