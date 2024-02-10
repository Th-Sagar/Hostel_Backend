const resetController = require('../controller/reset-controller')
const express = require('express')
const router = express.Router()


router.route('/reset').post(resetController);

module.exports = router;