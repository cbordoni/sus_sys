const express = require('express');

const auth = require('../controllers/auth');

var router = express.Router();

router.route('/api/auth/login/').post(auth.login);

router.route('/api/auth/user/').post(auth.verifyToken, auth.getUser);

module.exports = router;
