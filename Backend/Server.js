const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/BookStoreRoutes");

const cors = require("cors");

// Initialize Express

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at port ${PORT} ..`));
