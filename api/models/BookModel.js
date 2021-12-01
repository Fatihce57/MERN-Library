const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.model("BookStore", bookSchema)