const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const router = require("./routes/BookStoreRoutes");

const cors = require("cors");

// Initialize Express

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books', router);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });