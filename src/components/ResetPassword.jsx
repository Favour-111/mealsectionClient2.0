import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

function ResetPassword() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    setMessage({ text: "Password reset link sent!", type: "success" });
    setTimeout(() => setMessage(null), 3000);
    console.log("Password reset for:", emailOrPhone);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans relative">
      {/* Back */}
      <div className="relative z-10 p-4 pt-10 flex items-center justify-start text-black">
        <button onClick={() => navigate("/login")} aria-label="Go back" className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center flex-grow p-4">
        <div className="flex flex-col items-center justify-center text-center mb-12 mt-12">
          <h1 className="text-3xl font-extrabold text-red-600 tracking-wide">Mealsection</h1>
          <p className="text-xs text-gray-500 font-medium mt-1 tracking-wider">
            CAMPUS CRAVING. DELIVERED DAILY
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-t-3xl shadow-lg w-full max-w-sm p-8 mt-auto">
          <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
          <form onSubmit={handleReset} className="space-y-6">
            <InputField
              label="Email or Phone"
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              name="emailOrPhone"
              placeholder="Enter your email or phone number"
              required
            />
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 px-4 rounded-lg font-bold hover:bg-red-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>

      {/* Success message */}
      {message && (
        <div className="text-center mt-4">
          <p className={`text-sm ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
            {message.text}
          </p>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
