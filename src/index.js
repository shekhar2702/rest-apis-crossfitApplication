const express = require("express");
const app = express();
const v1Router = require("./v1/routes/workoutRoute");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h2>Test app</h2>");
});

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
