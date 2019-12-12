module.exports = (sequelize, DataTypes) => {
    const USER = sequelize.define('USER', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: false,
        freezeTableName: true
    });

    USER.login = ({ username, code }) => {
        return USER.findOrCreate({
            where: { username, code },
            raw: true
        });
    };

    USER.getUserIdx = ({ username, code }) => {
        return USER.findOne({
            where: { username, code },
            attributes: ['id'],
            raw: true
        });
    };

    return USER;
};