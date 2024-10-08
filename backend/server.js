const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const ArtPiece = require('./models/artpiece.model');
const artpieceRoute = require('./routes/artpiece.route');
const { MongoClient, ServerApiVersion } = require('mongodb');
const {connectDB} = require('./config/db.js');
const app = express();

dotenv.config();
// assign port
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/artpieces', artpieceRoute);


// ------------------------- home page ----------//
app.get('/', function (req, res) {
  res.send('Hello World')
})

// -------- Listening on Port and connect to DB ----------//
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
})

