const mongoose = require('mongoose')

const Personal_detailsSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    contact: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    cv: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('detail',Personal_detailsSchema)