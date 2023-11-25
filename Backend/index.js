const express = require("express");
const chats = require("./Data/data");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  res.send("Server is running");
});

app.get("/api/chat", async (req, res) => {
  res.send(chats);
});

app.listen(port, console.log("Hello"));
