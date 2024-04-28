const mongoose = require("mongoose");

const bookStoreSchema = new mongoose.Schema({
  book: {
    type: String,
    required: true,
  },
  publishYear: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BookStore", bookStoreSchema);
