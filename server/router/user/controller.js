const USER = require('../../models').USER;

const login = async (req, res) => {
    const { username, code } = req.query;
    const user = await USER.login({ username, code });
    if (!user) return res.sendStatus(401);
    return res.send(200);
};

module.exports = { login };