const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: string,
        required: true,
        unique: true,
    },
    author: {
        type: string,
        required: true,
    },
    quantity: {
        type: string,
        required: true,
    },
    department: {
        type: string,
        required: true,
    },
    comments: {
        type: string,
    }
}, { timestamps: true })

module.exports = mongoose.model("BookStore", bookSchema)