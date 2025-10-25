import { useState } from "react";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
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
      <div className="flex items-center justify-between p-4 border-b border-b-[#d3d3d3]">
        {/* Replace with your logo component or image */}
        <Link to="/" className="text-xl font-bold text-red-600">
          <img
            src="https://www.mealsection.com/WhatsApp%20Image%202024-08-24%20at%2020.18.12_988ce6f9.jpg"
            alt=""
            width={120}
          />
        </Link>
        <button
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-red-600"
        >
          {/* Close Icon (X) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col mt-3">
        <Link
          to="/home"
          className="py-3 px-4 text-sm hover:bg-gray-100 border-b border-b-[#eaeaea] text-gray-800"
          onClick={toggleSidebar}
        >
          Home
        </Link>
        <Link
          to="/orders"
          className="py-3 px-4 text-sm hover:bg-gray-100 border-b border-b-[#eaeaea] text-gray-800"
          onClick={toggleSidebar}
        >
          Orders
        </Link>
        <Link
          to="/contact"
          className="py-3 px-4 text-sm hover:bg-gray-100 border-b border-b-[#eaeaea] text-gray-800"
          onClick={toggleSidebar}
        >
          Contact Us
        </Link>
        <Link
          to="/profile"
          className="py-3 px-4 text-sm hover:bg-gray-100 border-b border-b-[#eaeaea] text-gray-800"
          onClick={toggleSidebar}
        >
          Profile
        </Link>
      </nav>

      {/* Sign Out Button */}
      <div className="absolute bottom-0 w-full p-4 border-t border-t-[#d3d3d3]">
        <button
          onClick={() => {
            console.log("Signing out...");
            toggleSidebar();
            // Implement your sign out logic here
          }}
          className="flex items-center text-[var(--default)] hover:opacity-80 font-normal text-sm gap-3"
        >
          <div>
            <CiLogout />
          </div>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
