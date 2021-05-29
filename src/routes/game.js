const express = require('express');
const router = express.Router();
const { responseInitialRoute, reposnePost } = require('../controllers/game')
//middlewares
const { makeLog } = require('../middleware');

router.get('/', responseInitialRoute);
router.post('/', makeLog, reposnePost)

module.exports = router;