import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Onboarding() {
  const [university, setUniversity] = useState("");
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    console.log(`User selected role: ${role}`);
    navigate("/login"); // redirect after selection
  };

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 md:px-8 md:py-5 shadow-sm">
        {/* Logo + Tagline */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Mealsection Logo"
              className="h-8 md:h-10"
            />
            <h1 className="text-base md:text-lg font-bold text-gray-800">
              Mealsection
            </h1>
          </div>
          <p className="text-xs md:text-sm text-gray-500 sm:ml-2">
            Eat Fresh • Deliver Fast • Enjoy Happy
          </p>
        </div>

        {/* Login/Signup */}
        <div className="text-xs md:text-sm">
          <Link to="/login" className="text-red-600 font-medium hover:underline">
            Login
          </Link>
          <span className="mx-1">/</span>
          <Link to="/signup" className="text-red-600 font-medium hover:underline">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 md:px-8 lg:px-16 space-y-6">
        {/* University Dropdown */}
        <select
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          className="w-full max-w-xs p-3 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="" disabled>
            Choose University
          </option>
          <option value="university_a">University A</option>
          <option value="university_b">University B</option>
          <option value="university_c">University C</option>
        </select>

        {/* Buttons */}
        <div className="flex flex-col w-full max-w-xs gap-3">
          <button
            onClick={() => handleRoleSelect("customer")}
            className="bg-red-600 text-white py-3 rounded-lg font-semibold text-sm md:text-lg shadow hover:bg-red-700 transition"
          >
            I'm a Customer
          </button>
          <button
            onClick={() => handleRoleSelect("vendor")}
            className="border border-red-600 text-red-600 py-3 rounded-lg font-semibold text-sm md:text-lg hover:bg-red-50 transition"
          >
            I'm a Vendor
          </button>
          <button
            onClick={() => handleRoleSelect("rider")}
            className="border border-red-600 text-red-600 py-3 rounded-lg font-semibold text-sm md:text-lg hover:bg-red-50 transition"
          >
            I'm a Rider
          </button>
        </div>
      </div>

      {/* Manager Login */}
      <div className="absolute bottom-6 w-full text-center">
        <Link
          to="/manager-login"
          className="text-gray-500 text-xs md:text-sm font-medium hover:underline"
        >
          Manager Login
        </Link>
      </div>
    </div>
  );
}

export default Onboarding;
