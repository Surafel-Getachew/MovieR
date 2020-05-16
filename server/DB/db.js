const mongoose = require("mongoose");
const {DBURL} = require("../config")
const connectDB = async() => {
    try {
        mongoose.connect(DBURL, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: true,
          useUnifiedTopology: true,
        });
        console.log("DB connected")
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports ={ 
    connectDB
}