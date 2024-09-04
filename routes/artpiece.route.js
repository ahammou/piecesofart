const express = require('express');
const ArtPiece = require('../models/artpiece.model');
const router = express.Router();
const {getArtPieces, getArtPiece, createArtPiece, updateArtPiece, deleteArtPiece} = require('../controllers/artpiece.controller');

// ------ GET routers --------//
router.get('/', getArtPieces);
router.get('/:id', getArtPiece);

// ------ POST routers --------//
router.post('/', createArtPiece);

// ------ UPDATE routers --------//
router.put('/:id', updateArtPiece);

// ------ DELETE routers --------//
router.put('/:id', deleteArtPiece);

module.exports = router;

