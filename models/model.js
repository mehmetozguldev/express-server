"use strict"

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        minlength: 3,
        maxlength: 50,
    },
    age: {
        required: true,
        type: Number,
        min: 18,
        max: 120,
    },
});

module.exports = mongoose.model('Data', dataSchema);