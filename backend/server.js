const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find((n) => n.id === id);
  res.send(note);
});

app.listen(PORT, console.log(`Server is running on the port ${PORT} `));
