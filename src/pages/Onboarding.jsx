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
    <div className="bg-[url('https://png.pngtree.com/png-clipart/20240717/original/pngtree-fast-food-pattern-in-red-png-image_15580267.png')] bg-cover bg-center bg-no-repeat bg-white/95 bg-blend-overlay flex flex-col min-h-screen font-sans relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 md:px-8 md:py-3 ">
        {/* Logo + Tagline */}
        <img
          src="https://favour-111.github.io/MEalSection-ComongSoon-2.0/WhatsApp%20Image%202024-08-24%20at%2020.18.12_988ce6f9.jpg"
          alt=""
          className="w-40"
        />

        {/* Login/Signup */}
        <div className="text-xs md:text-sm">
          <Link
            to="/login"
            className="text-[var(--default)] font-medium hover:underline"
          >
            Login
          </Link>
          <span className="mx-1">/</span>
          <Link
            to="/signup"
            className="text-[var(--default)] font-medium hover:underline"
          >
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
          className="sm:w-100 w-80 text-sm  p-3 border border-gray-300 rounded-lg  md:text-base focus:outline-none focus:ring-1 focus:ring-[var(--default)]"
        >
          <option value="" disabled>
            Choose University
          </option>
          <option value="university_a">University A</option>
          <option value="university_b">University B</option>
          <option value="university_c">University C</option>
        </select>

        {/* Buttons */}
        <div className="flex flex-col w-80 gap-3">
          <button
            onClick={() => handleRoleSelect("customer")}
            className="bg-transparent border border-[var(--default)] text-[var(--default)] py-3 rounded-lg font-normal text-sm  shadow hover:bg-[var(--default)] hover:text-white transition"
          >
            I'm a Customer
          </button>
          <button
            onClick={() => handleRoleSelect("vendor")}
            className="bg-transparent border border-[var(--default)] text-[var(--default)] py-3 rounded-lg font-normal text-sm  shadow hover:bg-[var(--default)] hover:text-white transition"
          >
            I'm a Vendor
          </button>
          <button
            onClick={() => handleRoleSelect("rider")}
            className="bg-transparent border border-[var(--default)] text-[var(--default)] py-3 rounded-lg font-normal text-sm  shadow hover:bg-[var(--default)] hover:text-white transition"
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
