import { useState } from "react";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";

// Signup component
function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    emailOrPhone: "",
    password: "",
    university: "",
    role: "customer",
    profilePicture: null,
    termsAccepted: false,
  });
  const [message, setMessage] = useState(null);

  const navigate = useNavigate(); // ✅ react-router navigation

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (type === "file") {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!form.termsAccepted) {
      setMessage({ text: "You must accept the terms and conditions.", type: "error" });
      setTimeout(() => setMessage(null), 3000);
      return;
    }
    setMessage({ text: "Sign up successful!", type: "success" });
    setTimeout(() => {
      setMessage(null);
      navigate("/login"); // ✅ go back to login after signup
    }, 3000);
    console.log("Signup with", form);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' ... %3C/svg%3E")`,
        }}
      ></div>

      {/* Back button */}
      <div className="relative z-10 p-4 pt-10 flex items-center justify-start text-black">
        <button onClick={() => navigate("/login")} aria-label="Go back" className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Form */}
      <div className="relative z-10 flex flex-col items-center flex-grow p-4">
        <div className="flex flex-col items-center justify-center text-center mb-6 mt-6">
          <img
            src="https://placehold.co/120x80/000000/FFF.png?text=Logo"
            alt="Mealsection Logo"
            className="w-20 h-20 mb-2"
          />
          <h1 className="text-3xl font-extrabold text-red-600 tracking-wide">
            Mealsection
          </h1>
          <p className="text-xs text-gray-500 font-medium mt-1 tracking-wider">
            CAMPUS CRAVING. DELIVERED DAILY
          </p>
        </div>

        <div className="bg-white rounded-t-3xl shadow-lg w-full max-w-sm p-8 mt-auto">
          <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleSignup} className="space-y-4">
            {/* Full Name */}
            <InputField
              label="Full Name*"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              name="fullName"
              placeholder="Enter your full name"
              required
            />
            {/* Email/Phone */}
            <InputField
              label="Email or Phone*"
              type="text"
              value={form.emailOrPhone}
              onChange={handleChange}
              name="emailOrPhone"
              placeholder="Enter your email or phone number"
              required
            />
            {/* Password */}
            <InputField
              label="Password*"
              type="password"
              value={form.password}
              onChange={handleChange}
              name="password"
              placeholder="Enter your password"
              required
            />
            {/* University Select */}
            <div>
              <label htmlFor="university" className="block text-sm font-semibold text-gray-700">
                Your University*
              </label>
              <select
                id="university"
                name="university"
                value={form.university}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md shadow-sm"
                required
              >
                <option value="" disabled>Select your university</option>
                <option value="university_a">University A</option>
                <option value="university_b">University B</option>
              </select>
            </div>
            {/* Role Radio */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Role*
              </label>
              <div className="mt-1 flex space-x-4">
                {["customer", "vendor", "rider"].map((role) => (
                  <label key={role} className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-red-600"
                      name="role"
                      value={role}
                      checked={form.role === role}
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-gray-700 capitalize">{role}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Profile Picture */}
            <div>
              <label htmlFor="profilePicture" className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-600 hover:file:bg-red-100"
              />
              {form.profilePicture && (
                <p className="text-xs text-gray-500 mt-1">
                  File selected: {form.profilePicture.name}
                </p>
              )}
            </div>
            {/* Terms */}
            <div className="flex items-start">
              <input
                id="termsAccepted"
                name="termsAccepted"
                type="checkbox"
                checked={form.termsAccepted}
                onChange={handleChange}
                className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded mt-1"
                required
              />
              <label htmlFor="termsAccepted" className="ml-2 block text-sm text-gray-900">
                By clicking "Sign Up", you agree with the{" "}
                <a href="#" className="text-red-600 hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 px-4 rounded-lg font-bold hover:bg-red-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      {message && <Message message={message.text} type={message.type} />}
    </div>
  );
}

export default Signup;
