const express = require('express');
const router = express.Router();
const sequelize = require('./../config/database');
const permission = require('../middlewares/permissions');


module.exports = router;

router.get('/', permission('admin', 'client'),  async (req, res) => {
    const products = await sequelize.models.products.findAndCountAll();
    return res.send(200).json(products);
});

router.post('/', permission('admin'), async (req, res) => {
    const { body } = req;
    try{
        const product = await sequelize.models.products.create({
            name: body.name,
            description: body.description,
            price: body.price,
            image: body.image
        });
        await product.save();
        return res.send(201).json({ data: product, message: 'Product created successfully' });
    }catch(err){
        console.error(err);
        return res.send(400).json({ data: {}, message: err.message });
    }
});

router.put('/:id', permission('admin'), async (req, res) => {
    const { body, params } = req;
    const product = await sequelize.models.products.findByPk(params.id);
    if(!product){
        return res.send(404).json({ data: product, message: 'Product not found' });
    }
    try{
        const updatedProduct = await product.create({
            name: body.name,
            description: body.description,
            price: body.price,
            image: body.image
        });
        return res.send(200).json({ data: updatedProduct, message: 'Product updated successfully' });
    }catch(err){
        console.error(err);
        return res.send(400).json({ data: {}, message: err.message });
    }
});

router.delete('/:id', permission('admin'), async (req, res) => {
    const product = await sequelize.models.products.findByPk(params.id);
    if(!product) {
        return res.send(404).json({ data: product, message: 'Product not found' });
    }
    await product.destroy();
    return res.send(200).json({ data: {}, message: 'Product deleted successfully' });
});