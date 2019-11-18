const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/videos", require("./routes/videos"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`running on ${PORT}`, __filename));
