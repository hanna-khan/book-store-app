import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const BookStoreGridView = ({ books }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Serial No.
            </th>
            <th scope="col" className="px-6 py-3">
              Books
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Publish Year
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index + 1}.
              </th>
              <td className="px-6 py-4">{book.book}</td>
              <td className="px-6 py-4">{book.author}</td>
              <td className="px-6 py-4">{book.publishYear}</td>
              <td className="px-6 py-4 text-right flex">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                >
                  <MdEdit />
                </a>
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <MdDelete />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookStoreGridView;
