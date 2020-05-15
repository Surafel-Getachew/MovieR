const express = require("express");

const app = express();
const port = 2000 || process.env.PORT;
app.use(express.json({extended:false}))

app.get("/",(req,res) => {
    res.send("test")
})

app.listen((req,res) => {
    console.log(`server is up and running on port ${port}`);
})

