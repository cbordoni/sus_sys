const express = require('express');

const router = express.Router();
const appointment = require('../controllers/appointment');
const auth = require('../controllers/auth');

router.route('/api/appointment/').post(appointment.create);

router
	.route('/api/appointment/:id')
	.get(auth.verifyToken, appointment.get)
	.put(auth.verifyToken, appointment.update)
	.delete(auth.verifyToken, appointment.delete);

module.exports = router;
