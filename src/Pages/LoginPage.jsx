import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import {
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaUserPlus,
  FaExclamationTriangle,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { ToastContainer, toast } from "react-toastify";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "../Provider/AuthContext";

const googleProvider = new GoogleAuthProvider();
const LoginPage = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const emailref = useRef();
  const showPassword = (event) => {
    event.preventDefault();
    setShowPass(!showPass);
  };
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {});
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError("Invalid email or password. Please try again.");
        form.reset();
      });
  };
  const handleForgotPassword = () => {
    const email = emailref.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info("Password Reset mail send to your Email successfully!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 sm:p-10 border border-gray-200">
        <h2 className="text-4xl font-extrabold text-center text-emerald-800 mb-2">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Sign in to continue your gardening journey.
        </p>

        <button
          onClick={googleSignIn}
          className="w-full flex items-center justify-center space-x-3 py-3 px-4 mb-6 text-sm font-semibold border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition duration-300"
        >
          <FcGoogle className="w-5 h-5" />
          <span>Sign in with Google</span>
        </button>

        <div className="flex items-center mb-6">
          <div className="grow border-t border-gray-300"></div>
          <span className="shrink mx-4 text-sm text-gray-500">
            Or continue with
          </span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        <form onSubmit={handleLogIn} className="space-y-6">
          {error && (
            <div className="flex items-center bg-red-50 border border-red-300 text-red-700 p-3 rounded-lg text-sm">
              <FaExclamationTriangle className="w-4 h-4 mr-2" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                ref={emailref}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="yourmail@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password"
                name="password"
                type={showPass ? "text" : "password"}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                placeholder="••••••••"
                required
              />
              {showPass ? (
                <IoEyeOutline
                  onClick={showPassword}
                  className="absolute top-2.5 right-4 text-xl"
                />
              ) : (
                <IoEyeOffOutline
                  onClick={showPassword}
                  className="absolute top-2.5 right-4 text-xl"
                />
              )}
            </div>
          </div>

          <div className="flex justify-end text-sm">
            <Link
              to=""
              onClick={handleForgotPassword}
              className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 text-white bg-emerald-600 font-bold rounded-lg shadow-md hover:bg-emerald-700"
          >
            <FaSignInAlt className="w-5 h-5" />
            <span>Log In</span>
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-emerald-600 hover:text-emerald-500 flex items-center justify-center mt-2"
          >
            <FaUserPlus className="w-4 h-4 mr-1" />
            <span>Create a new account</span>
          </Link>
        </p>
      </div>
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default LoginPage;
