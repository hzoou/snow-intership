const express = require('express');
const router = express.Router();

const { getAnswerList } = require('./controller');

router.get('/:questionIdx', getAnswerList);

module.exports = router;