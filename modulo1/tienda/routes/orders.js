const express = require('express');
const router = express.Router();
const sequelize = require('../config/database');


module.exports = router;

router.get('/', async (req, res) => {
    const orders = await sequelize.models.orders.findAndCountAll();
    return res.send(200).json(orders);
});

router.post('/', async (req, res) => {
    const { body } = req;
    try{
        const product = await sequelize.models.products.findByPk(body.productId);
        if(!product){
            return res.send(404).json({ data: order, message: 'product not found' });
        }
        const order = await sequelize.models.orders.create({
            userId: body.userId,
            productId: body.productId,
            quantity: body.quantity
        });
        await order.save();
        return res.send(201).json({ data: order, message: 'order created successfully' });
    }catch(err){
        console.error(err);
        return res.send(400).json({ data: {}, message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    const { body, params } = req;
    const order = await sequelize.models.orders.findByPk(params.id);
    if(!order){
        return res.send(404).json({ data: order, message: 'order not found' });
    }
    try{
        const product = await sequelize.models.products.findByPk(body.productId);
        if(!product){
            return res.send(404).json({ data: order, message: 'product not found' });
        }
        const updatedorder = await order.create({
            userId: body.userId,
            productId: body.productId,
            quantity: body.quantity
        });
        return res.send(200).json({ data: updatedorder, message: 'order updated successfully' });
    }catch(err){
        console.error(err);
        return res.send(400).json({ data: {}, message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    const order = await sequelize.models.orders.findByPk(params.id);
    if(!order) {
        return res.send(404).json({ data: order, message: 'order not found' });
    }
    await order.destroy();
    return res.send(200).json({ data: {}, message: 'order deleted successfully' });
});