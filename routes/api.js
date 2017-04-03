/*
    api.js Where our HTTP routes are
*/

// Express
const express = require('express');

// Express router
const router = express.Router();

// Ninja model
const Ninja = require('../models/Ninja');

/*  API ROUTES  */

// Get a list of ninjas from the DB
router.get('/ninjas', function (req, res, next) {
    res.send({
        type: 'GET'
    });
});

// Add a new ninja to the DB
router.post('/ninjas', function (req, res, next) {
    // Create new instance of a ninja based on Ninja model and saves it to the DB, then it sends the saved ninja back for testing
    Ninja.create(req.body).then(function (ninja) {
        res.send(ninja);
    }).catch(next);
});

// Update a ninja in the DB
router.put('/ninjas/:id', function (req, res, next) {
    res.send({
        type: 'PUT'
    });
});

// Delete a ninja from the DB
router.delete('/ninjas/:id', function (req, res, next) {
    Ninja.findByIdAndRemove({
        _id: req.params.id
    }).then(function (ninja) {
        res.send(ninja);
    });
});

// Export all of our routes
module.exports = router;
