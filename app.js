/*
    app.js Main entry point for our app
*/

const express = require('express');

// Set up our express app
const app = express();

const port = 3000;

// Listen for reqs
app.listen(port, function () {
    console.log('Server is up and running!');
});
