import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookStoreGridView from "./Components/BookStoreGridView";
import BookStoreCardView from "./Components/BookStoreCardView";
import SelectView from "./Components/SelectView";
import PublishBook from "./Components/PublishBook";
import { IoMdAddCircle } from "react-icons/io";
import Navbar from "./Components/Navbar";

const App = () => {
  const [view, setView] = React.useState("tableView");
  const [publishBook, setPublishBook] = React.useState(false);
  const handleChange = (event) => {
    setView(event.target.checked ? "cardView" : "tableView");
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
              <IoMdAddCircle size={30} onClick={() => setPublishBook(true)} />
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-10">
        {view === "tableView" ? <BookStoreGridView /> : <BookStoreCardView />}
      </div>
      <PublishBook />
    </div>
  );
};

export default App;
