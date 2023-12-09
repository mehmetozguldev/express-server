'use strict';

require('dotenv').config();

const express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./routes/routes'),
    bodyParser = require("body-parser"),
    swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express"),
    mongoString = process.env.DATABASE_URL,
    PORT = process.env.PORT;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected')
})

const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(
    PORT,
    () => console.log(`The server started at http://localhost:${PORT}`)
);
