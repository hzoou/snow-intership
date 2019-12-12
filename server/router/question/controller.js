const QUESTION = require('../../models').QUESTION;

const getQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const { dataValues } = await QUESTION.find({ id });
        if (dataValues) {
            res.status(200).send(dataValues);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
};

const addQuestion = async (req, res) => {
    try {
        const { username, code, content, photo } = req.body;
        const { dataValues } = await QUESTION.add({ username, code, content, photo });
        if (dataValues) {
            const { id } = dataValues;
            res.status(201).send({ id });
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
};

module.exports = { getQuestion, addQuestion };