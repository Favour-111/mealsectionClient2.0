import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "test@example.com" && password === "password123") {
            resolve({ success: true, message: "Login successful!" });
          } else {
            reject(new Error("Invalid email or password."));
          }
        }, 1500);
      });
      console.log("Login successful!", response.message);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
      console.error("Login failed:", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans relative">
      {/* Back Button */}
      <div className="relative z-10 p-4 pt-10 flex items-center justify-start">
        <button
          aria-label="Go back"
          className="text-gray-600 hover:text-gray-800"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center flex-grow p-4">
        {/* Logo + Title */}
        <div className="flex flex-col items-center text-center mb-12 mt-8 sm:mt-12">
          <img
            src="https://www.mealsection.com/WhatsApp%20Image%202024-08-24%20at%2020.18.12_988ce6f9.jpg"
            alt="Mealsection Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-2"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 tracking-wide">
            
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 font-medium mt-1 tracking-wider">
            CAMPUS CRAVING. DELIVERED DAILY
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-t-3xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md p-6 sm:p-8 md:p-10 mt-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-semibold text-gray-700"
              >
                Email or Phone
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-red-500 focus:ring-red-500 text-sm sm:text-base"
                placeholder="Enter your email or phone number"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm sm:text-base font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-red-500 focus:ring-red-500 text-sm sm:text-base"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-gray-700"
                >
                  Remember Me
                </label>
              </div>
              <button
                type="button"
                onClick={() => navigate("/resetPassword")}
                className="font-semibold text-red-600 hover:text-red-500"
              >
                Forgot Password?
              </button>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm sm:text-base mt-2 text-center">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 px-4 rounded-lg font-bold hover:bg-red-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm sm:text-base"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        {/* Sign up link */}
        <div className="text-center mt-6 mb-4">
          <p className="text-gray-700 text-sm sm:text-base">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="font-semibold text-red-600 hover:text-red-500"
            >
              Sign Up.
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
