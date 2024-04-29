import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookStoreGridView from "./Components/BookStoreGridView";
import BookStoreCardView from "./Components/BookStoreCardView";
import SelectView from "./Components/SelectView";
import PublishBook from "./Components/PublishBook";
import { IoMdAddCircle } from "react-icons/io";
import Navbar from "./Components/Navbar";
import { IoIosClose } from "react-icons/io";
import { baseURL } from "./Utils/constant";
import axios from "axios";

const App = () => {
  const [view, setView] = React.useState("tableView");
  const [showPopover, setShowPopover] = useState(false);
  const [publishBook, setPublishBook] = React.useState(false);
  const [bookInput, setBookInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [publishYearInput, setPublishYearInput] = useState("");
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveBook = () => {
    axios
      .post(`${baseURL}/save`, {
        book: bookInput,
        author: authorInput,
        publishYear: publishYearInput,
      })
      .then((res) => {
        console.log(res.data);
        setBookInput("");
        setAuthorInput("");
        setPublishYearInput("");
        closePopover();
      })
      .catch((err) => console.log(err));
  };

  const updateToDo = (book) => {
    setBookInput(book.book);
    setAuthorInput(book.author);
    setPublishYearInput(book.publishYear);
    setShowPopover(true);
  };
  

  const handleChange = (event) => {
    setView(event.target.checked ? "cardView" : "tableView");
  };
  const openPopover = () => {
    setShowPopover(true);
  };

  const closePopover = () => {
    setShowPopover(false);
  };

  return (
    <div>
      <Navbar handleChange={handleChange} />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mr-6">
          Do you want to add a book ?
        </span>
        <div className=" w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
              <IoMdAddCircle size={30} onClick={openPopover} />
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-10">
        {view === "tableView" ? (
          <BookStoreGridView books={books} />
        ) : (
          <BookStoreCardView books={books} updateToDo={updateToDo} />
        )}
      </div>
      {showPopover && (
        <div className="overlay">
          <div className="popover">
            <div className="close-icon" onClick={closePopover}>
              <IoIosClose size={24} />
            </div>
            <PublishBook
              closePopover={closePopover}
              publishYearInput={publishYearInput}
              authorInput={authorInput}
              bookInput={bookInput}
              setPublishYearInput={setPublishYearInput}
              setAuthorInput={setAuthorInput}
              setBookInput={setBookInput}
              saveBook={saveBook}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
