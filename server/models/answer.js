module.exports = (sequelize, Sequelize) => {
    const { Op, DataTypes } = Sequelize;

    const ANSWER = sequelize.define('ANSWER', {
        questionIdx: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, {
        timestamps: false,
        freezeTableName: true
    });

    ANSWER.getListByQuestion = ({ questionIdx }) => {
        const { QUESTION } = require('../models');
        return ANSWER.findAll({
            include: [{
                model: QUESTION,
                where: { id: {[Op.eq]: questionIdx}},
                attributes: [['content', 'question']],
            }],
        });
    };

    ANSWER.add = ({ questionIdx, content }) => {
        return ANSWER.create({ questionIdx, content });
    };

    return ANSWER;
};