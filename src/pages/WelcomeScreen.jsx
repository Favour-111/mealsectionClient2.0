import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/40 to-orange-50/40 flex flex-col relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Logo Header */}
      <div className="p-6 relative z-10 animate-fadeIn">
        <img
          src="https://favour-111.github.io/MEalSection-ComongSoon-2.0/WhatsApp%20Image%202024-08-24%20at%2020.18.12_988ce6f9.jpg"
          alt="MealSection Logo"
          className="w-44 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow pb-20 z-10 px-6">
        <div className="floating mb-8 animate-scaleIn">
          <img
            src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-delivery-boy-with-food-png-image_8876808.png"
            alt="Delivery"
            className="w-48 sm:w-56 md:w-64 drop-shadow-2xl"
          />
        </div>

        <div
          className="text-center space-y-4 animate-fadeIn"
          style={{ animationDelay: "200ms" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Welcome to
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              MealSection
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-medium italic max-w-md mx-auto">
            Your favorite meals delivered to your doorstep
          </p>

          {/* Loading Animation */}
          <div className="pt-8 flex flex-col items-center gap-3">
            <div className="flex gap-2">
              <div
                className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Loading your experience...
            </p>
          </div>
        </div>

        {/* Features Preview */}
        <div
          className="grid grid-cols-3 gap-4 mt-12 max-w-md w-full animate-fadeIn"
          style={{ animationDelay: "400ms" }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg text-center hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold text-gray-700">Fast Delivery</p>
          </div>

          <div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg text-center hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: "500ms" }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold text-gray-700">Best Prices</p>
          </div>

          <div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg text-center hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: "600ms" }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold text-gray-700">Quality Food</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
