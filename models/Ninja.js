/*
    Ninja Schema and Model
*/

// Mongoose
const mongoose = require('mongoose');

// Mongoose Schema
const Schema = mongoose.Schema;

// Geo Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dshpere"
    }
});

/*
    Ninja Schema and Model
*/

// Ninja Schema
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

// Ninja Model
const Ninja = mongoose.model('ninja', NinjaSchema);

// Export this Ninja Model
module.exports = Ninja;
