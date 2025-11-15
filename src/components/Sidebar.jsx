import { Link, useLocation } from "react-router-dom";
import {
  CiLogout,
  CiHome,
  CiShoppingCart,
  CiUser,
  CiMail,
} from "react-icons/ci";
import { RiHistoryLine } from "react-icons/ri";
import { useCartContext } from "../context/CartContext";

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();
  const { packs } = useCartContext();
  const totalItems = (packs || []).reduce(
    (sum, pack) => sum + (pack.items?.length || 0),
    0
  );

  const menuItems = [
    { path: "/", label: "Home", icon: <CiHome size={22} /> },
    { path: "/orders", label: "Orders", icon: <RiHistoryLine size={22} /> },
    { path: "/contact", label: "Contact Us", icon: <CiMail size={22} /> },
    { path: "/profile", label: "Profile", icon: <CiUser size={22} /> },
  ];

  return (
    <>
      {/* Desktop Top Nav (visible on lg and above) */}
      <div className="hidden lg:block w-full sticky top-0 bg-white/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://www.mealsection.com/WhatsApp%20Image%202024-08-24%20at%2020.18.12_988ce6f9.jpg"
              alt="MealSection Logo"
              className="w-32 hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <nav className="flex items-center gap-1.5">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  title={item.label}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                    transition-all duration-200 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--default)]/40 focus-visible:ring-offset-2
                    ${
                      isActive
                        ? "bg-gradient-to-r from-red-50 to-orange-50 text-[var(--default)] border-red-100 shadow-sm"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[var(--default)] hover:ring-1 hover:ring-[var(--default)]/10"
                    }`}
                >
                  <span
                    className={
                      isActive
                        ? "text-[var(--default)]"
                        : "text-gray-500 group-hover:text-[var(--default)]"
                    }
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="pointer-events-none absolute -bottom-2 left-3 right-3 h-0.5 bg-[var(--default)]/90 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            to="/cart"
            className="ml-3 relative inline-flex items-center justify-center rounded-xl px-3 py-2 text-gray-700 hover:text-[var(--default)] hover:bg-gray-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--default)]/40"
            aria-label="Open cart"
            title="Cart"
          >
            <CiShoppingCart className="text-2xl" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[1.25rem] h-5 px-1 rounded-full text-[10px] font-bold bg-[var(--default)] text-white flex items-center justify-center shadow-sm">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow z-50 transform transition-all duration-300 ease-out lg:hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Link to="/" className="flex-1">
            <img
              src="https://www.mealsection.com/WhatsApp%20Image%202024-08-24%20at%2020.18.12_988ce6f9.jpg"
              alt="MealSection Logo"
              className="w-32 hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-xl hover:bg-red-50 text-gray-600 hover:text-[var(--default)] transition-all duration-300 group"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col mt-6 px-4 space-y-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  group flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium text-[15px]
                  transition-all duration-300 
                  ${
                    isActive
                      ? "bg-gradient-to-r from-red-50 to-orange-50 text-[var(--default)] shadow-sm"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[var(--default)]"
                  }
                `}
                onClick={toggleSidebar}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span
                  className={`
                  ${
                    isActive
                      ? "text-[var(--default)]"
                      : "text-gray-500 group-hover:text-[var(--default)]"
                  }
                  transition-all duration-300 group-hover:scale-110
                `}
                >
                  {item.icon}
                </span>
                <span className="flex-1">{item.label}</span>
                {isActive && (
                  <div className="w-1.5 h-1.5 bg-[var(--default)] rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="mx-6 my-6 border-t border-gray-200" />

        {/* User Section or Promotional Content */}
        <div className="px-6 mb-6">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-5 border border-red-100">
            <h3 className="font-bold text-gray-800 mb-2 text-sm">
              🎁 Special Offer
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              Get 20% off on your next order from select vendors!
            </p>
            <Link
              to="/"
              onClick={toggleSidebar}
              className="text-xs font-semibold text-[var(--default)] hover:underline"
            >
              Browse Now →
            </Link>
          </div>
        </div>

        {/* Sign Out Button */}
        <div className="absolute bottom-0 w-full p-6 border-t border-gray-100 bg-gray-50/50">
          <button
            onClick={() => {
              localStorage.clear();
              window.location.replace("/login");
            }}
            className="flex items-center gap-3 text-red-600 hover:text-red-700 font-medium text-sm group w-full px-4 py-3 rounded-xl hover:bg-red-50 transition-all duration-300"
          >
            <CiLogout className="text-xl group-hover:scale-110 transition-transform" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
