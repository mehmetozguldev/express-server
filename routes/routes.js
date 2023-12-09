const express = require('express');
const Model = require('../models/model');

const router = express.Router();


// Post method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get by ID method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update by ID method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API');
});

// Delete by ID method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API');
});

module.exports = router;
