/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

const CancelButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-gradient-to-r to-red-600 from-red-500 text-white px-4 py-1 rounded-lg w-fit flex gap-2"
      >
        <ImCross className="text-2xl" /> Cancel
      </Link>
    </div>
  );
};

export default CancelButton;
