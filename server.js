const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose connected");
});

connection.on("error", (err) => {
  console.log("ERROR connecting mongoose");
});

app.get("/api/config", (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
