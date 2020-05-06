const express = require("express"),
  path = require("path"),
  cors = require("cors"),
  multer = require("multer"),
  bodyParser = require("body-parser");

// File upload settings
const PATH = "./uploads";
// Express settings
const app = express();
app.use(cors());

app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.get("/api", function (req, res) {
  res.end("File catcher");
});

// Create PORT
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log("Connected to port " + PORT);
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
