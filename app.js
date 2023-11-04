const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8000;
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config()
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("Error while connecting to MongoDB:", err);
  });
app.use("/api", require("./routes"))

app.listen(port, () => {
  console.log(`Server is run on port ${port}`);
});
