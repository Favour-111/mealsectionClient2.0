import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import axios from "axios";
import { IoIosArrowRoundBack } from "react-icons/io";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API}/api/users/forgot-password`,
        { email }
      );
      setMessage({
        text: data.message || "Password reset link sent!",
        type: "success",
      });
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[url('https://png.pngtree.com/png-clipart/20240717/original/pngtree-fast-food-pattern-in-red-png-image_15580267.png')] bg-cover bg-center bg-no-repeat bg-white/95 bg-blend-overlay flex flex-col min-h-screen font-sans relative overflow-hidden">
      {/* Back Button */}
      <div className="px-6 sm:px-10 pt-10 flex justify-between items-center">
        <button
          aria-label="Go back"
          className="text-gray-600 hover:text-gray-800"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowRoundBack size={30} />
        </button>
        <h1 className="font-[600]">Reset password</h1>
        <h1></h1>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center flex-grow ">
        <div className="flex flex-col items-center justify-center text-center mb-12 mt-12">
          <img
            src="https://favour-111.github.io/MEalSection-ComongSoon-2.0/WhatsApp%20Image%202024-08-24%20at%2020.18.12_988ce6f9.jpg"
            alt=""
            className="w-50"
          />
        </div>

        {/* Form */}
        <div className="bg-white rounded-t-3xl shadow w-[100%] px-8 sm:px-14 py-10 mt-auto">
          <h2 className="text-2xl font-[600] text-center mb-4">
            Reset Password
          </h2>
          <form onSubmit={handleReset} className="space-y-6">
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter your email address"
              required
            />
            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
            {message && (
              <p className="text-green-600 text-sm mt-1">{message.text}</p>
            )}
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 px-4 text-sm rounded-lg font-[500] hover:bg-red-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
