import React from "react";
import { FaHome, FaAngleLeft, FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center border-4 border-emerald-100 transition-all duration-500 hover:shadow-emerald-300/50">
          <FaExclamationTriangle className="w-16 h-16 text-emerald-500 mx-auto mb-6 animate-pulse" />

          <h1 className="text-8xl font-black text-emerald-800 tracking-tighter mb-4">
            404
          </h1>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Oops! You've Lost Your Way.
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            It looks like the plant you were searching for is not Found! The
            page you requested doesn't exist.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center space-x-2 py-3 px-6 text-white bg-emerald-600 font-bold rounded-lg shadow-md hover:bg-emerald-700 transition duration-300 transform hover:scale-[1.02]"
            >
              <FaHome className="w-5 h-5" />
              <span>Go to Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
