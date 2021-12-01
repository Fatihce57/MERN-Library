const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const BookStore = require('./models/BookModel')

PORT = 5000
const app = express();

app.use(bodyParser.json());
app.use(cors());

//mongoose.connection
mongoose.connect("mongodb+srv://fatih:1978@cluster0.wbgzn.mongodb.net/books?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

// app.get('/', (req, res)=>{
//     res.send("Wellcome")
// });

// app.get('/haberler', (req, res)=>{
//     res.send("<h1>Haberler</h1>")
// })

app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`)
})
