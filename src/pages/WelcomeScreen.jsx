import React from 'react';

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans relative overflow-hidden">
      {/* Background with subtle food icons */}
      {/* To get the exact background, you'd either use a custom CSS `background-image` with SVG
          or extend Tailwind's theme for a custom utility. For this example,
          we'll use a similar, but simplified, approach with repeated emojis or a light gray. */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* Simplified background pattern using repeated emojis */}
        <div className="absolute top-1/4 left-1/4 text-gray-200 text-6xl opacity-70">🍔</div>
        <div className="absolute top-1/2 right-1/4 text-gray-200 text-6xl opacity-70">🍟</div>
        <div className="absolute bottom-1/4 left-1/2 text-gray-200 text-6xl opacity-70">🍕</div>
        <div className="absolute top-1/3 right-1/3 text-gray-200 text-6xl opacity-70">🥤</div>
        <div className="absolute bottom-1/3 left-1/3 text-gray-200 text-6xl opacity-70">🍴</div>
        <div className="absolute top-1/2 left-1/3 text-gray-200 text-6xl opacity-70">🍦</div>
        <div className="absolute bottom-1/2 right-1/3 text-gray-200 text-6xl opacity-70">🍜</div>
        <div className="absolute top-1/4 right-3/4 text-gray-200 text-6xl opacity-70">🍣</div>
      </div>

      {/* Top Logo Section */}
      <div className="p-8 pb-4 text-center z-10">
        <div className="flex items-center justify-center mb-1">
          {/* Placeholder for the logo icon. In a real app, you'd use an <img> tag */}
          <span className="text-red-600 text-3xl mr-2">†</span> {/* Simulating the cross icon */}
          <h1 className="text-gray-800 text-3xl font-bold tracking-tight">MealSection</h1>
        </div>
        <p className="text-gray-600 text-sm italic">"CAMPUS CRAVINGS, DELIVERED DAILY"</p>
      </div>

      {/* Main content - Welcome message */}
      <div className="flex flex-col items-center justify-end flex-grow p-8 pb-16 z-10">
        <h2 className="text-4xl font-extrabold text-red-600 mb-2">
          Welcome to <span className="text-yellow-400">MealSection</span>
        </h2>
        <p className="text-lg text-red-400 font-medium italic">
          ...food delivery to your doorstep
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;