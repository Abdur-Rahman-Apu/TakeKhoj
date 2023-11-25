const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  res.send("Server is running");
});

app.listen(5000, console.log("Hello"));
