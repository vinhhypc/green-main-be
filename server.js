const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./src/routes");
const connectDB = require("./src/config/db");

const app = express();
app.use(cors());

const { port } = require("./src/config/env");

// connectDB();

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello MongoDB!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
