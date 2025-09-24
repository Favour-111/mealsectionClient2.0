import { useState } from "react";
import { Link } from "react-router-dom";

// The parent component will manage this state
// e.g., <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
function Sidebar({ isOpen, toggleSidebar }) {
  return (
    // Conditional styling to show/hide the sidebar
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Sidebar Header with Logo and Close Button */}
      <div className="flex items-center justify-between p-4 border-b">
        {/* Replace with your logo component or image */}
        <Link to="/" className="text-xl font-bold text-red-600">
          MealSection
        </Link>
        <button onClick={toggleSidebar} className="text-gray-600 hover:text-red-600">
          {/* Close Icon (X) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col p-4">
        <Link
          to="/"
          className="py-4 px-2 hover:bg-gray-100 border-b text-gray-800"
          onClick={toggleSidebar}
        >
          Home
        </Link>
        <Link
          to="/orders"
          className="py-4 px-2 hover:bg-gray-100 border-b text-gray-800"
          onClick={toggleSidebar}
        >
          Orders
        </Link>
        <Link
          to="/contact"
          className="py-4 px-2 hover:bg-gray-100 border-b text-gray-800"
          onClick={toggleSidebar}
        >
          Contact Us
        </Link>
        <Link
          to="/profile"
          className="py-4 px-2 hover:bg-gray-100 border-b text-gray-800"
          onClick={toggleSidebar}
        >
          Profile
        </Link>
      </nav>

      {/* Sign Out Button */}
      <div className="absolute bottom-0 w-full p-4 border-t">
        <button
          onClick={() => {
            console.log("Signing out...");
            toggleSidebar();
            // Implement your sign out logic here
          }}
          className="flex items-center text-red-600 hover:text-red-800 font-semibold"
        >
          {/* Sign Out Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h3a3 3 0 013 3v1"
            />
          </svg>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;