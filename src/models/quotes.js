const mongoose = require('mongoose')

const quoteShema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    }
})


const Quote = new mongoose.model("Quote",quoteShema)

module.exports = Quote