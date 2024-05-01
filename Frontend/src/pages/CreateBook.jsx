/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BackButton from "../Components/BackButton";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { baseURL } from "../Utils/constant";
import CancelButton from "../Components/CancelButton";
import { IoIosSave } from "react-icons/io";

const CreateBooks = () => {
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      book,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post(`${baseURL}/books`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <>
      <div className="p-4">
        <BackButton />
        <h1 className=" text-4xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-4xl my-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Add New
          </span>{" "}
          Book
        </h1>
        {loading ? <Spinner /> : ""}

        <form className="max-w-md mx-auto flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_book"
              value={book}
              onChange={(e) => setBook(e.target.value)}
              id="floating_book"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_book"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Book Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              id="floating_author"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_author"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Author
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_publishYear"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              id="floating_publishYear"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_publishYear"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Publish Year
            </label>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleSaveBook}
              className="bg-gradient-to-r to-emerald-600 from-sky-400 text-white px-4 py-1 rounded-lg w-fit flex gap-2"
            >
              <IoIosSave className="text-2xl" /> Save
            </button>
            <CancelButton />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBooks;
