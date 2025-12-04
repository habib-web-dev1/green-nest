import React, { useState, useEffect, useContext } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaUserEdit,
  FaCamera,
  FaUser,
  FaSignInAlt,
} from "react-icons/fa";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router";
import Spinner from "../Components/Spinner";
import { AuthContext } from "../Provider/AuthContext";

const ProfilePage = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);
  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await updateUser({ displayName, photoURL });
      toast.success("Profile updated successfully!");
      setDisplayName(displayName);
      setPhotoURL(photoURL);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      toast.error("Failed to update profile!");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center font-sans">
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center border border-gray-200">
          <FaSignInAlt className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
            Access Denied
          </h2>
          <p className="text-gray-500 mb-6">
            You must be logged in to view your profile page.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center justify-center space-x-2 py-3 px-6 text-white bg-emerald-600 font-bold rounded-lg shadow-md hover:bg-emerald-700 transition duration-300"
          >
            <span>Go to Login</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center font-sans">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-8 sm:p-10 border border-gray-200">
        <h2 className="text-4xl font-extrabold text-center text-emerald-800 mb-2">
          My Profile
        </h2>
        <p className="text-center text-gray-500 mb-8">
          View and update your personal information.
        </p>

        <form
          onSubmit={handleUpdateProfile}
          className="flex flex-col md:flex-row gap-8"
        >
          <div className="md:w-1/3 flex flex-col items-center p-4 bg-emerald-50 rounded-lg shadow-inner">
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-emerald-300 bg-gray-200 flex items-center justify-center text-gray-500 text-6xl shadow-md">
              {photoURL ? (
                <img
                  src={photoURL}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUserCircle />
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-4 text-center">
              {displayName || "No Name Set"}
            </h3>
            <p className="text-gray-600 flex items-center mt-1 text-center">
              <FaEnvelope className="mr-2 text-emerald-600" /> {user?.email}
            </p>
          </div>

          <div className="md:w-2/3 p-4 flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 text-center md:text-left">
              Edit Profile Details
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-700"
                  placeholder="Your Name"
                  required
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
                  type="url"
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-700"
                  placeholder="https://example.com/your-photo.jpg"
                />
              </div>
            </div>

            <div className="text-center md:text-left pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center space-x-2 py-3 px-6 text-white bg-emerald-600 font-medium rounded-lg shadow-md hover:bg-emerald-700 disabled:opacity-50"
              >
                <FaUserEdit className="w-5 h-5" />
                <span>{loading ? "Updating..." : "Update Profile"}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
