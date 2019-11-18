const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const mainVideos = require("../models/mainVideos");
const sideVideos = require("../models/sideVideos")
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
console.log(__filename);

module.exports = router;
