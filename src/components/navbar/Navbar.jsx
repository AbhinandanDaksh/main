import React from "react";
import Logo from "../../assets/media/logo.png"

export const Navbar = () => {
  return (
    <header className="w-9/12 m-auto top-0">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="" />
          {/* <span className="text-[#ff4141] text-xl font-bold">TOURist</span> */}
        </div>

        {/* Search Box */}
        <div className="flex-grow max-w-md mx-4 hidden sm:flex">
          <input
            type="text"
            placeholder="Search for experiences and cities"
            className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring focus:border-blue-400 placeholder:text-sm"
          />
          <button className="px-4 py-2 bg-gray-100 border rounded-r-lg">
            <i className="fa fa-search"></i>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4 text-gray-600 text-sm">
          <div className="hidden sm:flex items-center space-x-1">
            <span>English / INR</span>
            <span>|</span>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 100 15.292m0-15.292v15.292"
                />
              </svg>
              Help
            </span>
          </div>
          <button className="bg-white text-gray-800 px-4 py-1 rounded-lg border border-gray-300 hover:shadow md:text-base text-sm">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};
