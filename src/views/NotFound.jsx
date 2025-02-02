import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex gap-8 items-center justify-center h-screen">
      <div className="flex flex-col p-4 mr-8 text-center">
        <h1 className="text-6xl font-extrabold mb-6 text-white">
          404 - Page Not Found
        </h1>
        <p className="text-xl mb-4">
          It appears that the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-8 py-4 shadow-lg mt-4 text-center rounded-lg text-white bg-yellow-600 hover:text-white hover:bg-yellow-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
