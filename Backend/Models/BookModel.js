const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    book: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book; // Using CommonJS module.exports
