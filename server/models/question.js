module.exports = (sequelize, DataTypes) => {
    const QUESTION = sequelize.define('QUESTION', {
        userIdx: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        photo: {
            type: DataTypes.TEXT,
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    QUESTION.add = async ({ username, code, content, photo }) => {
        const { USER } = require('../models');
        const { id } = await USER.getUserIdx({ username, code });
        console.log(id);
        return QUESTION.create({ userIdx: id, content, photo });
    };

    QUESTION.find = async ({ id }) => {
        return QUESTION.findOne({
            where: { id },
        })
    };

    return QUESTION;
};