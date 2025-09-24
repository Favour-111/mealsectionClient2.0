import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Onboarding() {
  const [university, setUniversity] = useState("");
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    console.log(`User selected role: ${role}`);
    // Redirect to login/signup after role selection
    navigate("/login");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://via.placeholder.com/30"
            alt="Mealsection Logo"
            className="h-8"
          />
          <h1 className="text-lg font-bold text-gray-800">Mealsection</h1>
          <p className="text-xs text-gray-500 ml-2">
            Eat Fresh • Deliver Fast • Enjoy Happy
          </p>
        </div>

        {/* Login/Signup */}
        <div className="text-sm">
          <Link
            to="/login"
            className="text-red-600 font-medium hover:underline"
          >
            Login
          </Link>
          <span className="mx-1">/</span>
          <Link
            to="/signup"
            className="text-red-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-6 space-y-6">
        {/* University Dropdown */}
        <select
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          className="w-full max-w-xs p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="" disabled>
            Choose University
          </option>
          <option value="university_a">University A</option>
          <option value="university_b">University B</option>
          <option value="university_c">University C</option>
        </select>

        {/* Buttons */}
        <button
          onClick={() => handleRoleSelect("customer")}
          className="w-full max-w-xs bg-red-600 text-white py-3 rounded-lg font-semibold text-lg shadow hover:bg-red-700 transition"
        >
          I'm a Customer
        </button>
        <button
          onClick={() => handleRoleSelect("vendor")}
          className="w-full max-w-xs border border-red-600 text-red-600 py-3 rounded-lg font-semibold text-lg hover:bg-red-50 transition"
        >
          I'm a Vendor
        </button>
        <button
          onClick={() => handleRoleSelect("rider")}
          className="w-full max-w-xs border border-red-600 text-red-600 py-3 rounded-lg font-semibold text-lg hover:bg-red-50 transition"
        >
          I'm a Rider
        </button>
      </div>

      {/* Manager Login */}
      <div className="absolute bottom-6 w-full text-center">
        <Link
          to="/manager-login"
          className="text-gray-500 text-sm font-medium hover:underline"
        >
          Manager Login
        </Link>
      </div>
    </div>
  );
}

export default Onboarding;
