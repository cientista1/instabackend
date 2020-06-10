const mongoose = require('mongoose')

const PosSchema = new mongoose.Schema({
    author : String,
    place: String,
    description: String,
    hastags : String,
    image : String,
    likes:{
        type: Number,
        default : 0
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('Post',PosSchema);