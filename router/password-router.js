const express = require('express')
const router = express.Router();
const password = require('../controller/password-controller')



router.route('/setPassword').post(password);

module.exports = router;