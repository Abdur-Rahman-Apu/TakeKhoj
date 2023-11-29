const express = require("express");
const chats = require("./Data/data");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });
const DbConnection = require("./Config/dbConnect");
const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/chatRoutes");
const { notFound, errorHandler } = require("./Middlewares/errorMiddleware");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
console.log(process.env.PORT);

DbConnection();

app.get("/", async (req, res) => {
  res.send("Server is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/api/chat", async (req, res) => {
  res.send(chats);
});

app.listen(port, console.log("Hello"));
