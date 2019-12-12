const express = require('express');
const router = express.Router();

const { getAnswerList, addAnswer } = require('./controller');

router.get('/:questionIdx', getAnswerList);
router.post('/:questionIdx', addAnswer);

module.exports = router;