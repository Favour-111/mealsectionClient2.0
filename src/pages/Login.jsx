import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
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
    <div className="bg-[url('https://png.pngtree.com/png-clipart/20240717/original/pngtree-fast-food-pattern-in-red-png-image_15580267.png')] bg-cover bg-center bg-no-repeat bg-white/95 bg-blend-overlay flex flex-col min-h-screen font-sans relative overflow-hidden">
      {/* Back Button */}
      <div className=" px-6 sm:px-10 pt-10 flex justify-between items-center">
        <button
          aria-label="Go back"
          className="text-gray-600 hover:text-gray-800"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowRoundBack size={30} />
        </button>
        <h1 className="font-[600]">Login</h1>
        <h1></h1>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center flex-grow ">
        {/* Logo + Title */}
        <div className="flex flex-col items-center text-center mb-12 mt-8 sm:mt-12">
          <img
            src="https://favour-111.github.io/MEalSection-ComongSoon-2.0/WhatsApp%20Image%202024-08-24%20at%2020.18.12_988ce6f9.jpg"
            alt=""
            className="w-50"
          />
        </div>

        {/* Form */}
        <div className="bg-white  rounded-t-3xl shadow w-[100%] px-8 sm:px-14 py-10  mt-auto">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-[500] text-gray-700"
              >
                Email or Phone
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-[10px] border bg-gray-50 border-gray-300  p-3 placeholder:text-sm text-sm"
                placeholder="Enter your email or phone number"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-[500] text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                className="mt-1 block w-full rounded-[10px] border bg-gray-50 border-gray-300  p-3 placeholder:text-sm text-sm"
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
                  className="h-4 w-4 text-[var(--default)]  border-gray-300 rounded"
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
                className="font-normal text-[var(--default)] hover:opacity-80"
              >
                Forgot Password?
              </button>
            </div>

            {/* Error */}
            {error && (
              <p className="text-[var(--default)] text-sm sm:text-base mt-2 text-center">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[var(--default)] text-white py-3 px-4 rounded-lg font-normal hover:opacity-80 transition-colors duration-200 focus:outline-none focus:ring-2 text-sm "
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          {/* Sign up link */}
          <div className="text-center mt-6 mb-4">
            <p className="text-gray-700 text-sm sm:text-base">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="underline font-normal text-[var(--default)] hover:text-[var(--default)]"
              >
                Sign Up.
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
