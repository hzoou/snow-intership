const express = require('express');
const router = express.Router();

const { getQuestion, addQuestion } = require('./controller');

router.post('/create', addQuestion);
router.get('/:id', getQuestion);

module.exports = router;