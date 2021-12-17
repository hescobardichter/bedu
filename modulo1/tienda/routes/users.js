const express = require('express');
const router = express.Router();
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = router;

router.get('/', async (req, res) => {
    const users = await sequelize.models.users.findAndCountAll();
    return res.send(200).json(users);
});

router.post('/', async (req, res) => {
    const { body } = req;
    try{
        const user = await sequelize.models.users.findOne({ where: { email: body.email } });
        if(user){
            return res.send(400).json({ data: user, message: 'user prev register' });
        }
        const newUser = await sequelize.models.users.create({
            name: body.description,
            lastname: body.productId,
            type: body.type,
            email: body.email,
            password: body.password
        });
        await newUser.save();
        return res.send(201).json({ data: newUser, message: 'user created successfully' });
        
    }catch(err){
        console.error(err);
        return res.send(400).json({ data: {}, message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    const { body, params } = req;
    const user = await sequelize.models.users.findByPk(params.id);
    if(!user){
        return res.send(404).json({ data: user, message: 'user not found' });
    }
    try{
        const user = await sequelize.models.users.findOne({ where: { email: body.email } });
        if(!user){
            return res.send(400).json({ data: user, message: 'user not register' });
        }
        const updatedUser = await user.create({
            name: body.description,
            lastname: body.productId,
            type: body.type,
            email: body.email,
            password: body.password
        });
        return res.send(200).json({ data: updatedUser, message: 'user updated successfully' });
    }catch(err){
        console.error(err);
        return res.send(400).json({ data: {}, message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    const user = await sequelize.models.users.findByPk(params.id);
    if(!user) {
        return res.send(404).json({ data: user, message: 'user not found' });
    }
    await user.destroy();
    return res.send(200).json({ data: {}, message: 'user deleted successfully' });
});