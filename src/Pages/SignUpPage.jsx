import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaCamera,
  FaUserPlus,
  FaSignInAlt,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "../Provider/AuthContext";
const googleProvider = new GoogleAuthProvider();
const SignUpPage = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const showPassword = (event) => {
    event.preventDefault();
    setShowPass(!showPass);
  };
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {});
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;
    setError("");
    const lowerCase = /(?=.*[a-z])/;
    const upperCase = /(?=.*[A-Z])/;
    const numberCase = /(?=.*\d)/;
    const passLength = password.length >= 6;
    if (!lowerCase.test(password)) {
      setError("Password must be contain a lowercase");
      return;
    } else if (!upperCase.test(password)) {
      setError("Password must be contain a uppercase");
      return;
    } else if (!numberCase.test(password)) {
      setError("Password must be contain a number");
      return;
    } else if (!passLength) {
      setError("Password must be 6 Characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            setUser(user);
          });
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        setError("Again Check all the Requirements to Register");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 sm:p-10 border border-gray-200">
        <h2 className="text-4xl font-extrabold text-center text-emerald-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Join us and start your green journey today!
        </p>

        <button
          onClick={googleSignIn}
          className="w-full flex items-center justify-center space-x-3 py-3 px-4 mb-6 text-sm font-semibold border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition duration-300"
        >
          <FcGoogle className="w-5 h-5" />
          <span>Sign up with Google</span>
        </button>

        <div className="flex items-center mb-6">
          <div className="grow border-t border-gray-300"></div>
          <span className="shrink mx-4 text-sm text-gray-500">
            Or use your email
          </span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          {error && (
            <div
              className="flex items-start bg-red-50 border border-red-300 text-red-700 p-3 rounded-lg text-sm"
              role="alert"
            >
              <FaExclamationTriangle className="w-4 h-4 mt-1 mr-2 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="font-semibold">Register Error:</span>
                <p className="text-xs">{error}</p>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Your Name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 "
                placeholder="yourmail@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <div className="relative">
              <FaCamera className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                id="photoURL"
                name="photoURL"
                type="url"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 "
                placeholder="https://example.com/photo.jpg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                id="password"
                name="password"
                type={showPass ? "text" : "password"}
                required
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 "
                placeholder="••••••••"
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

            <div className="mt-2 text-xs text-gray-500 space-y-1 ml-1">
              <p className={`flex items-center text-green-600`}>
                {" "}
                <FaCheckCircle className="w-3 h-3 mr-1" />
                At least 6 characters
              </p>
              <p className={`flex items-center text-green-600`}>
                {" "}
                <FaCheckCircle className="w-3 h-3 mr-1" />
                Contains an uppercase letter
              </p>
              <p className={`flex items-center text-green-600`}>
                {" "}
                <FaCheckCircle className="w-3 h-3 mr-1" />
                Contains a lowercase letter
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 text-white bg-emerald-600 font-bold rounded-lg shadow-md hover:bg-emerald-700 mt-6"
          >
            <FaUserPlus className="w-5 h-5" />
            <span>Register</span>
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-emerald-600 hover:text-emerald-500 transition-colors flex items-center justify-center mt-2"
          >
            <FaSignInAlt className="w-4 h-4 mr-1" />
            <span>Go to Log In</span>
          </Link>
        </p>
      </div>
      <ToastContainer position="top-center" autoClose={500} />
    </div>
  );
};

export default SignUpPage;
