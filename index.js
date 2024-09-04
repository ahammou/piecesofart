const express = require('express');
const mongoose = require('mongoose');
const ArtPiece = require('./models/artpiece.model');
const artpieceRoute = require('./routes/artpiece.route');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/artpieces', artpieceRoute);


// ------------------------- home page ----------//

app.get('/', function (req, res) {
  res.send('Hello World')
})

// ----------------------------- Listening on Port ----------//
app.listen(3000, () => {
    console.log('Server running on port 3000')
})

// -----------------------------Connection to the database ----------//
mongoose.connect("mongodb+srv://ahammou:ahammou2905@backenddb.tr1ls.mongodb.net/?retryWrites=true&w=majority&appName=backendDB").then(() => {
  console.log('connected to the DB!')
})