const express = require("express");
const {connectDB} = require("./DB/db");
const movie = require("./routes/movie");

const app = express();
const port = 2000|| process.env.PORT;

connectDB();
app.use(express.json({extended:false}))
app.use("/movieR/movie",movie);


app.listen(port,() => {
    console.log("running ...");
});
