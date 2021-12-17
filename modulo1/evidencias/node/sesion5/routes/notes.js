const express = require('express');
const router = express.Router();
const sequelize = require('./config/database');

const notes = [
    {
        id: 1,
        title: 'Hola mundo',
        content: 'This is dummy'
    }
];

router.get('/', async (req, res) => {
    const notes = await sequelize.models.Notes.findAll();
    return res.json(notes)
});
router.post('/', async (req, res) => {
    const { body } = req;
    const note  = { heading: body.title, content: body.content };
    const Note = await sequelize.models.Notes.create(note);
    Note.save();
    res.json({data: Note, message: 'Note created successfully'});
});
router.put('/:id', async (req, res) => {
    const { body, params } = req;
    const note = await sequelize.models.Notes.findOne(params.id);
    if(!note){
        res.status(404).json({data: {}, message: 'Note not found'});
    }
    const Note = await note.update({ 
        heading: body.heading,
        content: body.content
     });
    res.json({data: Note, message: 'Note updated successfully'});
});
router.delete('/:id', async (req, res) => {
    const { body, params } = req;
    const note = await sequelize.models.Notes.findOne(params.id);
    if(!note){
        res.status(404).json({data: {}, message: 'Note not found'});
    }
    await note.destroy()
    return res.json({data: {}, message: 'Note deleted'});
});

module.exports = router;