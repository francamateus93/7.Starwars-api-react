import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex gap-8 items-center justify-center h-screen">
      <div className="flex flex-col p-4 mr-8 text-center">
        <h1 className="text-6xl font-bold mb-6 text-white tracking-tight">
          404 - Page Not Found
        </h1>
        <p className="text-xl mb-4">
          It appears that the page you are looking for does not exist.
        </p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
