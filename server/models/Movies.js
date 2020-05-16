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
    likes:{
        type:Number,
    },
    image:{
        type:Buffer,
        // required:true need to change this for production.
    },
    
})

module.exports = mongoose.model("movie",Movie_Schema);