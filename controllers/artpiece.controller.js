const ArtPiece = require('../models/artpiece.model');

// ----------------- GET ALL PIECES OF ART -------------/
const getArtPieces = async (req, res) => {
    try {
        const artpieces = await ArtPiece.find({});
        res.status(200).json(artpieces);

    } catch (err) {
        res.status(500).json({message: err.message});

    }
};

// ----------------- GET ONE PIECE OF ART -------------/
const getArtPiece = async (req, res) => {
    try {
      const {id} = req.params;
      const piece = await ArtPiece.findById(id);
      res.status(200).json(piece)

    } catch (err) {
      res.status(500).json({message: err.message});

    }
  };

// ----------------- ADD ONE PIECE OF ART -------------/
  const createArtPiece = async (req, res) => {
    try {
      const artpieces = await ArtPiece.create(req.body);
      res.status(200).json(artpieces);
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  };

// ----------------- UPDATE ONE PIECE  OF ART -------------/
  const updateArtPiece = async (req, res) => {
    try {
      const {id} = req.params;
      const piece = await ArtPiece.findByIdAndUpdate(id, req.body);
  
      if (!piece) {
        return res.status(404).json({message: "Art piece not found."});
      }
  
      //recheck from the database
      const updatedPiece = await ArtPiece.findById(id);
      res.status(200).json(updatedPiece);
  
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  };

// ----------------- DELETE ONE PIECE OF ART -------------/
  const deleteArtPiece = async (req, res) => {
    try {
      console.log(req.params);
      const {id} = req.params;
      const piece = await ArtPiece.findByIdAndDelete(id);
      if (!piece) {
        return res.status(404).json({message: "Art piece not found."})
      }
      res.status(200).json({message: "Art piece deleted successfully."})
  
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  };


module.exports = {
    getArtPieces,
    getArtPiece,
    createArtPiece, 
    updateArtPiece,
    deleteArtPiece
}