const { ANSWER } = require('../../models');

const getAnswerList = async (req, res) => {
    try {
        const { questionIdx } = req.params;
        console.log(questionIdx);
        const answerList = await ANSWER.getListByQuestion({ questionIdx });
        if (answerList) res.status(200).send(answerList);
    } catch (e) {
        res.sendStatus(400);
    }
};

module.exports = { getAnswerList };