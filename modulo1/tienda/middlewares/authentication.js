const jwt = require('jsonwebtoken');
const sequelize = require('../config/database');

const authenticate = (req, res, next) => {
    const { authorization } = req.headers;
    jwt.verify(authorization, 'secretkey', async (err, decoded) => {
        if(err) {
            return res.send(401).json({ data: {}, message: 'Invalid credentials' });
        }
        req.user = await sequelize.models.users.findOne({ where: { id: decoded.userId } });
        next();
    })
}