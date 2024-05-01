/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../Components/home/BooksTable";
import BooksCard from "../Components/home/BooksCard";
import Spinner from "../Components/Spinner";
import { baseURL } from "../Utils/constant";
import { FaTable } from "react-icons/fa";
import { IoCard } from "react-icons/io5";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/books`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-gradient-to-r to-emerald-600 from-sky-400 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          <FaTable />
        </button>
        <button
          className="bg-gradient-to-r to-emerald-600 from-sky-400 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          <IoCard />
        </button>
      </div>
      <div className="flex justify-between items-center">
        {/* <h2 className="text-4xl font-extrabold dark:text-white my-8">
          Books List
        </h2> */}

        <h1 className=" text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl my-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            The Book
          </span>{" "}
          Store
        </h1>

        <Link to="/books/create">
          <MdOutlineAddBox className=" text-4xl bg-gradient-to-r to-emerald-600 from-sky-400 rounded-lg  px-1 py-1 " />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
