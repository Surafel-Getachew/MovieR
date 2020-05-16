const router = require("express").Router();
const multer = require("multer");
const Movie = require("../models/Movies");

router.get("/", async (req, res) => {
  try {
    const movie = await Movie.find();
    res.json({ movie });
  } catch (error) {}
});

router.get("/tvseries", async (req, res) => {
  try {
    const movies = await Movie.find({ catagory: "Tv Serires" });
    res.json({ movies });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find({ catagory: "movie" });
    res.json({ movies });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

const upload = multer({
  limits: {
    fileSize: 2000000,
  },
  // fileFilter(req, file, cb) {
  //     if (!file.orginalname.endWith(".pdf")){
  //         return cb(new Error("please upload a pdf file"))
  //     }
  //     cb(undefined,true)
  // }
});
// You have to add image later
router.post("/", upload.single("movieImage"), async (req, res) => {
  const { title, catagory, description } = req.body;
  console.log(req.file);
  try {
    const movie = new Movie({
      title,
      catagory,
      description,
      image: req.file.buffer,
    });

    await movie.save();
    res.json({ movie });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
