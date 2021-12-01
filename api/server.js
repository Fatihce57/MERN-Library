const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// const path = require('path');
const BookStore = require('./models/BookModel')

PORT = 5000
const app = express();

app.use(bodyParser.json());
app.use(cors());

// mongoose.connection
mongoose.connect("mongodb+srv://fatih:1978@cluster0.wbgzn.mongodb.net/books?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})
    .then(console.log("Connected to Database"))
    .catch((err) => console.log(err))

app.get("/books", (req, res) => {
    BookStore.find().then(books => res.json(books))
})

app.post("/newbook", async (req, res) => {
    try {
        const newBook = new BookStore({
            bookName: req.body.bookName,
            author: req.body.author,
            quantity: req.body.quantity,
            department: req.body.department,
            comments: req.body.comments
        });
        const book = await newBook.save();
        res.status(200).json(book);
    } catch (err) {
        console.log(err);
    }
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    BookStore.findByIdAndDelete({ _id: id }, (err) => {
        if (!err) {
            console.log("Book deleted");
        } else {
            console.log(err)
        }
    })
})

app.put('/lend/:id', async (req, res) => {
    try {
        await BookStore.findByIdAndUpdate(req.params.id, { $inc: { quantity: -1 } })
    } catch (err) {
        console.log(err);
    }
})

app.put('/back/:id', async (req, res) => {
    try {
        await BookStore.findByIdAndUpdate(req.params.id, { $inc: { quantity: 1 } })
    } catch (err) {
        console.log(err);
    }
})

app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`)
})
