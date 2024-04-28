const BookStoreModel = require("../Models/BookModel");

module.exports.getBook = async (req, res) => {
  try {
    const books = await BookStoreModel.find();
    res.send(books);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong" });
  }
};

module.exports.saveBook = (req, res) => {
  console.log(req.body);
  const { book, publishYear, author } = req.body;
  BookStoreModel.create({ book, publishYear, author })
    .then((data) => {
      console.log("Data Saved");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ error: err, msg: "Something went wrong" });
    });
};

module.exports.updateBook = (req, res) => {
  const { id } = req.params; // Change req.param to req.params
  const { book, author, publishYear } = req.body;
  BookStoreModel.findByIdAndUpdate(id, { book, author, publishYear })
    .then(() => {
      res.send("Updated Successfully ...");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ error: err, message: "Something went wrong" });
    });
};

module.exports.deleteBook = (req, res) => {
  const { id } = req.params; // Change req.param to req.params
  BookStoreModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ error: err, message: "Something went wrong" });
    });
};
