import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const islanding = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";
  const isAboutPage = location.pathname === "/about";
  const isRegistrationPage = location.pathname === "/register";
  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const token = sessionStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);
  
  const [isDash, setIsdash] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      setIsdash(true);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link to={isLoggedIn ? "/dash" : "/"}>
                  <img
                    className="hidden lg:block h-16 w-16 "
                    // src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    src="logo2.png"
                    alt="Event Crafter"
                  />
                </Link>
              </div>
              <div className="hidden mt-4 sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to={isLoggedIn ? "/dash" : "/"}
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                  {!isAboutPage && (
                    <Link
                      to="/about"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About Us
                    </Link>
                  )}
                  {/* <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Calendar
                  </a> */}
                </div>
              </div>
            </div>
            <nav className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
              {/* If the user is logged in, show the notifications button and dropdown */}
              {isLoggedIn && (
                <>
                  <div className="ml-3 relative">
                    <div>
                      <button
                        onClick={toggleDropdown}
                        type="button"
                        className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://avatars.githubusercontent.com/u/65602874?v=4"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* If the user is not logged in, show the login and registration links */}
              {!isLoggedIn && (
                <div className="flex items-center">
                  {isRegistrationPage && (
                    <Link
                      to="/login"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </Link>
                  )}
                  {isLoginPage && (
                    <Link
                      to="/register"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Register
                    </Link>
                  )}
                </div>
              )}
              {islanding && (
                !isLoggedIn &&(
                <div className="flex items-center">
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Register
                  </Link>
                </div>)
              )}
            </nav>
         

            <div className="relative">
              {isOpen && isLoggedIn && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <a
                    onClick={handleLogout}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
