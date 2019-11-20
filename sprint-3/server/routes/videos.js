const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
// const mainVideos = require("../models/mainVideos.json");
// const sideVideos = require("../models/sideVideos.json");
const fileName =
  "/Users/fawce/OneDrive/Documents/BrainstationProjects/benjamin-fawcett-brainflix/sprint-3/server/models/sideVideos.json";
let sideVideos = require(fileName);
const fileNameTwo =
  "/Users/fawce/OneDrive/Documents/BrainstationProjects/benjamin-fawcett-brainflix/sprint-3/server/models/mainVideos.json";
//"Users/fawce/OneDrive/Documents/BrainstationProjects/benjamin-fawcett-brainflix/sprint-3/server/modelsmainVideos.json";
let mainVideos = require(fileNameTwo);
// const logger = require("../middleware/logger");
const app = express();
const helper = require("../middleware/helper");
const uuid = require("uuid");
let sideVideosOne =
  "/Users/fawce/OneDrive/Documents/BrainstationProjects/benjamin-fawcett-brainflix/sprint-3/server/models/sideVideos.json";
let mainVideosOne =
  "/Users/fawce/OneDrive/Documents/BrainstationProjects/benjamin-fawcett-brainflix/sprint-3/server/models/mainVideos";

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.json(sideVideos);
});

router.get("/:id", (req, res) => {
  console.log(req.params.id)
  const found = mainVideos.some(video => video.id === req.params.id);
console.log(found)
  if (found) {
    console.log(mainVideos.filter(video => video.id === req.params.id))
    res.json(mainVideos.filter(video => video.id === req.params.id));
  } else {
    res
      .status(404)
      .json({ errorMessage: `Video with id:${req.params.id} not found` });
  }
});

router.post("/", (req, res) => {
  console.log(req.body);
  const id = uuid();
  let newSideVideos = {
    id,
    title: req.body.title,
    channel: "video channel",
    image: req.body.image
  };
  let date = new Date();
  let newMainVideos = {
    id,
    title: req.body.title,
    channel: "video channel",
    image: req.body.image,    
    description: req.body.description,
    views: "345,987",
    likes: "76,588",
    duration: "12:26",
    video: "",
    timestamp: date.getMilliseconds(),
    comments: []
  };
  mainVideos.push(newMainVideos);
  sideVideos.push(newSideVideos);
  helper.writeJSONFile(fileNameTwo, mainVideos);
  helper.writeJSONFile(fileName, sideVideos);
res.json("test")
  //res.redirect("/");
});

module.exports = router;
