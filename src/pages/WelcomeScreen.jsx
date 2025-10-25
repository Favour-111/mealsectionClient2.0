import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const WelcomeScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/onboarding");
    }, 2000);
  });
  return (
    <div className="bg-[url('https://png.pngtree.com/png-clipart/20240717/original/pngtree-fast-food-pattern-in-red-png-image_15580267.png')] bg-cover bg-center bg-no-repeat bg-white/95 bg-blend-overlay flex flex-col min-h-screen relative overflow-hidden">
      <div className="p-4">
        <img
          src="https://favour-111.github.io/MEalSection-ComongSoon-2.0/WhatsApp%20Image%202024-08-24%20at%2020.18.12_988ce6f9.jpg"
          alt=""
          className="w-50"
        />
      </div>

      {/* Main content - Welcome message */}
      <div className="flex flex-col items-center justify-center flex-grow pb-16 z-10">
        <img
          src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-delivery-boy-with-food-png-image_8876808.png"
          alt=""
          className="sm:w-40 w-30"
        />
        <h2 className="sm:text-4xl text-3xl text-center font-bold mb-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
          Welcome to MealSection
        </h2>

        <p className="text-[sm] font-[100] italic bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
          ...food delivery to your doorstep
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
