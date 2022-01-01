const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('education',educationSchema)