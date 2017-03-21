/*
    app.js Main entry point for our app
*/
// Express
const express = require('express');

// Set up our express app
const app = express();

const port = 3000;

// Make express use our routes with /api in front of our routes from routes/api.js
app.use('/api', require('./routes/api'));

// Listen for reqs
app.listen(port, function () {
    console.log('Server is up and running!');
});
