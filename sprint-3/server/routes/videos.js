const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const mainVideos = require("../models/mainVideos.json");
const sideVideos = require("../models/sideVideos.json");
//const fileName = "./server/models/sideVideos.json";
//"Users/fawce/OneDrive/Documents/BrainstationProjects/benjamin-fawcett-brainflix/sprint-3/server/modelssideVideos.json";
//let sideVideos = require(fileName);
//const fileNameTwo = "\Users\fawce\OneDrive\Documents\BrainstationProjects\benjamin-fawcett-brainflix\sprint-3\server\models\mainVideos.json"
// "/Users/fawce/OneDriveDocuments/BrainstationProjects/benjamin-fawcett-brainflix/sprint-3/server/model/mainVideo";
//"Users/fawce/OneDrive/Documents/BrainstationProjects/benjamin-fawcett-brainflix/sprint-3/server/modelsmainVideos.json";
//let mainVideos = require(fileNameTwo);
// const logger = require("../middleware/logger");
const app = express();
const helper = require("../middleware/helper");
const uuid = require("uuid");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.json(sideVideos);
});

router.get("/:id", (req, res) => {
  const found = mainVideos.some(video => video.id === req.params.id);

  if (found) {
    res.json(mainVideos.filter(video => video.id === req.params.id));
  } else {
    res
      .status(404)
      .json({ errorMessage: `Video with id:${req.params.id} not found` });
  }
});

router.post("/", (req, res) => {
  console.log();
  console.log(req.body);
  const newSideVideos = {
    image: req.body.image,
    title: req.body.title,
    channel: "video channel",
    id: id
  };
  let date = new Date();
  const newMainVideos = {
    image: req.body.image,
    title: req.body.title,
    channel: "video channel",
    description: req.body.description,
    id: id,
    views: "345,987",
    likes: "76,588",
    duration: "12:26",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: date.getMilliseconds(),
    comments: []
  };
  sideVideosData.push(newSideVideos);
  mainVideosData.push(newMainVideos);
  helper.writeJSONFile(mainVideos, mainVideosData);
  helper.writeJSONFile(sideVideos, sideVideosData);
});

console.log(__filename);

module.exports = router;
