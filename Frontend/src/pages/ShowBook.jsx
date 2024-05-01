/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../Components/BackButton";
import Spinner from "../Components/Spinner";
import { baseURL } from "../Utils/constant";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className=" text-4xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-4xl my-8">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Show
        </span>{" "}
        Book
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="max-w-md mx-auto flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span className="text-white">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span className="text-white">{book.book}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span className="text-white">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span className="text-white">{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            {/* <span>{new Date(book.createdAt).toString()}</span> */}
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            {/* <span>{new Date(book.updatedAt).toString()}</span> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
