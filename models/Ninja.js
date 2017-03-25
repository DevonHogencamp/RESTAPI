/*
    Ninja Schema and Model
*/

// Mongoose
const mongoose = require('mongoose');

// Mongoose Schema
const Schema = mongoose.Schema;

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
    }
    // TODO Add in geo location
});

// Ninja Model
const Ninja = mongoose.model('ninja', NinjaSchema);

// Export this Ninja Model
module.exports = Ninja;
