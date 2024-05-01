/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal.jsx";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-40 h-auto mb-3 my-6"
            src="./book.png"
            alt="book image"
          />
          {/* <h4 className="my-2 text-gray-500">{book._id}</h4> */}
          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-300 text-2xl" />
            <h2 className="my-1 text-gray-500 text-center">{book.book}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-300 text-2xl" />
            <h2 className="my-1 text-gray-500 ">{book.author}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            {/* <BiUserCircle className="text-red-300 text-2xl" /> */}
            <h2 className="my-1 text-gray-500 ">{book.publishYear}</h2>
          </div>
          <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
            {/* <BiShow
              className="text-3xl text-blue-800 hover:text-black cursor-pointer"
              onClick={() => setShowModal(true)}
            /> */}
            <Link to={`/books/details/${book._id}`}>
              <BiShow className="text-xl text-blue-800 hover:text-black" />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className="text-xl text-sky-600 hover:text-black" />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className="text-xl text-red-600 hover:text-black" />
            </Link>
          </div>
          {showModal && (
            <BookModal book={book} onClose={() => setShowModal(false)} />
          )}
        </div>
      </div>
    </>
  );
};

export default BookSingleCard;
