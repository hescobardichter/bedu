const express = require('express');
const router = express.Router();
const sequelize = require('../config/database');


module.exports = router;

router.get('/', async (req, res) => {
    const reviews = await sequelize.models.reviews.findAndCountAll();
    return res.send(200).json(reviews);
});

router.post('/', async (req, res) => {
    const { body } = req;
    try{
        const product = await sequelize.models.products.findByPk(body.productId);
        if(!product){
            return res.send(404).json({ data: review, message: 'product not found' });
        }
        const review = await sequelize.models.reviews.create({
            description: body.description,
            productId: body.productId
        });
        await review.save();
        return res.send(201).json({ data: review, message: 'review created successfully' });
    }catch(err){
        console.error(err);
        return res.send(400).json({ data: {}, message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    const { body, params } = req;
    const review = await sequelize.models.reviews.findByPk(params.id);
    if(!review){
        return res.send(404).json({ data: review, message: 'review not found' });
    }
    try{
        const product = await sequelize.models.products.findByPk(body.productId);
        if(!product){
            return res.send(404).json({ data: review, message: 'product not found' });
        }
        const updatedReview = await review.create({
            description: body.description,
            productId: product.productId
        });
        return res.send(200).json({ data: updatedReview, message: 'review updated successfully' });
    }catch(err){
        console.error(err);
        return res.send(400).json({ data: {}, message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    const review = await sequelize.models.reviews.findByPk(params.id);
    if(!review) {
        return res.send(404).json({ data: review, message: 'review not found' });
    }
    await review.destroy();
    return res.send(200).json({ data: {}, message: 'review deleted successfully' });
});