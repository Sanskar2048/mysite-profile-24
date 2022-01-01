const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('portfolio',portfolioSchema)