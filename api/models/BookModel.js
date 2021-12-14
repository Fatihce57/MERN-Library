const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookImage: {
        type: String,
        required: true,
    },
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
        type: Number,
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