import React, { useContext } from "react";
import { Link, NavLink } from "react-router";

import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        toast.success(error);
      });
  };
  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/plants">Plants</NavLink>
              </li>
              <li>
                <NavLink to="/profile">My Profile</NavLink>
              </li>
            </ul>
          </div>
          <figure>
            <img src="/logo.png" width={100} height={100} alt="" />
          </figure>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-base py-1 space-x-2 rounded-lg transition-all duration-200 ease-in-out">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/plants">Plants</NavLink>
            </li>
            <li>
              <NavLink to="/profile">My Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end dropdown dropdown-end space-x-4">
          {user ? (
            <div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={`${
                      user
                        ? user.photoURL
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }`}
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-xl mt-1 w-50 p-2 shadow-lg"
              >
                <li className="text-center mb-1">
                  <div className="flex flex-col items-center space-y-1">
                    <img
                      src={
                        user.photoURL
                          ? user.photoURL
                          : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
                      }
                      alt="User"
                      className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500 shadow-sm"
                    />
                    <p className="font-semibold text-gray-700 text-sm">
                      {user.displayName || "Anonymous User"}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </li>

                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-error text-white w-full"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-x-4">
              <Link to="/login">
                <button className="btn btn-outline border-emerald-500 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-800 transition-colors duration-200 px-4 py-2  h-auto">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn bg-emerald-600 text-white hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 shadow-md transition-colors duration-200 px-4 py-2  h-auto">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1500} />
    </nav>
  );
};

export default Header;
