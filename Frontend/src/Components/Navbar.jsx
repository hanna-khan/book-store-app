import React from "react";
import { BsCardList } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { IoBook } from "react-icons/io5";

const Navbar = ({ handleChange }) => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 mb-[4rem]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <IoBook size={30} className="text-white"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Book Store
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md: hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
          </button>
          <div className=" w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                <label className="inline-flex items-center cursor-pointer">
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-2">
                    <BsFillGridFill />
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    onChange={handleChange}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <BsCardList />
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
