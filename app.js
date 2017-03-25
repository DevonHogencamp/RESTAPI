/*
    app.js Main entry point for our app
*/
// Express
const express = require('express');

// Port for our app
const port = 3000;

// Body Parser
const bodyParser = require('body-parser');

// Mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ninjago');

// Switch from deprecated Mongoose promise to ES6 promise
mongoose.Promise = global.Promise;

// Set up our express app
const app = express();

// Set up body parser for express
app.use(bodyParser.json());

// Make express use our routes with /api in front of our routes from routes/api.js
app.use('/api', require('./routes/api'));

// Listen for reqs
app.listen(port, function () {
    console.log('Server is up and running!');
});
