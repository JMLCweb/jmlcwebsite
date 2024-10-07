require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const projectsRoutes = require("../src/routes/projectsRoutes");
app.use("/projects", projectsRoutes);

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
