import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Onboarding() {
  const [university, setUniversity] = useState("");
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    console.log(`User selected role: ${role}`);

    // Redirect user to login/signup
    navigate("/login"); // Or navigate("/signin") if that's your route
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header and Top Bar */}
      <div className="bg-white p-4 flex items-center justify-between shadow-sm">
        <button className="text-gray-600">
          {/* Hamburger menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/24x24.png?text=Logo"
            alt="Logo"
            className="h-6 mr-1"
          />
          <h1 className="text-lg font-bold text-red-600">Mealsection</h1>
        </div>
        <Link to="/login" className="text-gray-600 text-sm font-semibold hover:underline">
          Login
        </Link>
        <Link to="/signup" className="text-gray-600 text-sm font-semibold hover:underline">
          Sign Up
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center p-6 space-y-6">
        {/* University Dropdown */}
        <select
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          className="w-full max-w-xs p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="" disabled>Choose University</option>
          <option value="university_a">University A</option>
          <option value="university_b">University B</option>
          <option value="university_c">University C</option>
        </select>

        {/* Role Selection Buttons */}
        <button
          onClick={() => handleRoleSelect("customer")}
          className="w-full max-w-xs bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition"
        >
          I'm a Customer
        </button>
        <button
          onClick={() => handleRoleSelect("vendor")}
          className="w-full max-w-xs bg-white text-red-600 border border-red-600 py-3 rounded-lg font-semibold text-lg hover:bg-red-50 transition"
        >
          I'm a Vendor
        </button>
        <button
          onClick={() => handleRoleSelect("rider")}
          className="w-full max-w-xs bg-white text-red-600 border border-red-600 py-3 rounded-lg font-semibold text-lg hover:bg-red-50 transition"
        >
          I'm a Rider
        </button>
      </div>

      {/* Manager Login Link */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <Link to="/manager-login" className="text-gray-500 text-sm font-medium hover:underline">
          Manager Login
        </Link>
      </div>
    </div>
  );
}

export default Onboarding;
