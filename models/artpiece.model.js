const mongoose = require("mongoose");

const ArtPieceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please, enter an art piece name']
        }, 
        description: {
            type: String,
            required: [true, 'Please enter a small description'],
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
)

const Artpiece = mongoose.model('ArtPiece', ArtPieceSchema);

module.exports = Artpiece;
