import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import React, { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [balance] = useState(50000);

  const featuredVendors = [
    {
      id: 1,
      name: "Elegance",
      rating: 4.5,
      time: "20-30 mins",
      status: "Open",
      imageUrl: "https://placehold.co/400x300?text=Elegance",
    },
    {
      id: 2,
      name: "Food Court",
      rating: 4.0,
      time: "20-40 mins",
      status: "Closed",
      imageUrl: "https://placehold.co/400x300?text=Food+Court",
    },
  ];

  const allVendors = [
    ...featuredVendors,
    {
      id: 3,
      name: "Kitchen Hub",
      rating: 4.3,
      time: "20-35 mins",
      status: "Closed",
      imageUrl: "https://placehold.co/400x300?text=Kitchen+Hub",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-sm">
        <button aria-label="Menu" className="p-2">
          ☰
        </button>
        <img
          src="https://placehold.co/120x40?text=MealSection"
          alt="MealSection Logo"
          className="h-8"
        />
        <button
          aria-label="Cart"
          className="relative"
          onClick={() => navigate("/cart")}
        >
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </header>

      <main className="p-4 space-y-6">
        {/* Wallet Balance */}
        <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Wallet Balance</p>
            <p className="text-lg font-bold text-gray-800 mt-1">
              ₦{balance.toLocaleString()}
            </p>
          </div>
          <button
            onClick={() => navigate("/wallet")}
            className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-red-700"
          >
            Top Up
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-full flex items-center px-4 py-2 shadow">
          <input
            type="text"
            placeholder="Search Vendors or Meals"
            className="w-full bg-transparent outline-none text-sm text-gray-700"
          />
        </div>

        {/* Promo Banner */}
        <div className="bg-red-100 rounded-lg p-4 flex items-center space-x-3">
          <div className="bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-semibold">
            20% OFF
          </div>
          <p className="text-sm text-gray-700">
            Enjoy <span className="font-bold">20% off</span> your first order of
            the day when you order from{" "}
            <span className="font-bold text-red-600">Elegance!</span>
          </p>
        </div>

        {/* Featured Vendors */}
        <div>
          <h2 className="text-lg font-bold mb-3">Featured Vendors</h2>
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide pb-2">
            {featuredVendors.map((vendor) => (
              <div
                key={vendor.id}
                className="flex-none w-40 bg-white rounded-xl shadow hover:shadow-md cursor-pointer"
                onClick={() => navigate(`/vendor/${vendor.id}`)}
              >
                <img
                  src={vendor.imageUrl}
                  alt={vendor.name}
                  className="w-full h-24 object-cover rounded-t-xl"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold">{vendor.name}</h3>
                  <p className="text-xs text-gray-500">
                    ⭐ {vendor.rating} | {vendor.time} |{" "}
                    <span
                      className={
                        vendor.status === "Open"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {vendor.status}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Vendors */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">All Vendors</h2>
            <button className="text-sm text-red-600">Show All</button>
          </div>
          <div className="space-y-3">
            {allVendors.map((vendor) => (
              <div
                key={vendor.id}
                className="bg-white rounded-xl shadow p-3 flex items-center justify-between cursor-pointer hover:shadow-md"
                onClick={() => navigate(`/vendor/${vendor.id}`)}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={vendor.imageUrl}
                    alt={vendor.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold">{vendor.name}</h3>
                    <p className="text-xs text-gray-500">
                      ⭐ {vendor.rating} | {vendor.time} |{" "}
                      <span
                        className={
                          vendor.status === "Open"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {vendor.status}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
