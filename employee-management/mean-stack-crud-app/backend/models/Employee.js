const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    designation: {
        type: String,
        trim: true
    },
    phoneNumber: {
        type: Number,
        trim: true
    }
}, {
    collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)