const express = require('express')
const router = express.Router()
const tokenController= require('../controller/token-controller')



router.route('/token').post(tokenController)

module.exports = router;