const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path=require('path');

PORT=5000
const app= express();

app.use(bodyParser.json());
app.use(cors());

// app.get('/', (req, res)=>{
//     res.send("Wellcome")
// });

// app.get('/haberler', (req, res)=>{
//     res.send("<h1>Haberler</h1>")
// })

app.listen(PORT, ()=>{
    console.log(`Server is working on http://localhost:${PORT}`)
})
