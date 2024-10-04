const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

app.use(cors());
app.use(express.json());

// Rota para o backend
app.get("/", (req, res) => {
  res.send("Welcome to backend of JMLCweb!");
});

// Serve os arquivos da build do React
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Para qualquer rota que não seja API, serve o index.html do React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Port: ${port}`);
});
