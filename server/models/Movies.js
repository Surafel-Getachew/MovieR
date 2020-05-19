const mongoose = require("mongoose");

const Movie_Schema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    catagory:{
        type:String,
        required:true
    },
    description:{
         type:String,
        required:true
    },
    genere:{
        type:String,
        require:true
    },
    starting:{
        type:String,
        require:true
    },
    maturity:{
        type:String,
        require:true
    },
    likes:{
        type:Number,
    },
    image:{
        type:Buffer,
        // required:true need to change this for production.
    },
    
})

module.exports = mongoose.model("movie",Movie_Schema);