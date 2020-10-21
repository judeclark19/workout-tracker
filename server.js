const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

// const ingredientsController = require("./controllers/ingredientsController");
// const pizzaController = require("./controllers/pizzaController")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose connected");
});

connection.on("error", (err) => {
  console.log("ERROR connecting mongoose");
});

app.get("/api/config", (req, res) => {
  res.json({ success: "Workout homework connected" });
});

// app.use(ingredientsController);
// app.use(pizzaController);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
