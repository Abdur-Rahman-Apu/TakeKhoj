const express = require("express");
const chats = require("./Data/data");
const cors = require("cors");
const DbConnection = require("./Config/dbConnect");
require("dotenv").config({ path: "../.env" });
const userRoutes = require("./Routes/userRoutes");

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
console.log(process.env.PORT);

DbConnection();

app.get("/", async (req, res) => {
  res.send("Server is running");
});

app.use("/api/user", userRoutes);

app.get("/api/chat", async (req, res) => {
  res.send(chats);
});

app.listen(port, console.log("Hello"));
