import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"; // ⬅ added useLocation
import Sidebar from "./components/Sidebar";
import Footer from "./components/footer/Footer";
import routes from "./routes";
import "./App.css";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import useCart from "./hooks/useCart";
import { Toaster } from "react-hot-toast";
function App() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // ⬅ get current route

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Check if current route is the welcome screen
  const hiddenRoutes = [
    "/",
    "/onboarding",
    "/login",
    "/signup",
    "/cart",
    "/reset-password",
    "/orders",
    "/orderdetails",
    "/wallet",
    "/profile",
  ];
  const isWelcomeScreen = hiddenRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      {!isWelcomeScreen && ( // Hide header on welcome screen too if needed
        <header className="px-5 py-3 flex bg-white shadow-sm justify-between items-center ">
          <button onClick={toggleSidebar}>
            <HiOutlineMenu size={24} />
          </button>
          <img
            src="https://www.mealsection.com/WhatsApp%20Image%202024-08-24%20at%2020.18.12_988ce6f9.jpg"
            alt=""
            className="w-40"
          />
          <button onClick={() => navigate("/cart")} className="relative">
            <IoCartOutline size={24} />
            <div className="absolute top-0 right-0 rounded-full bg-red-600 text-white font-[600] text-[10px] h-3 flex items-center justify-center w-3">
              {cart.length}
            </div>
          </button>
        </header>
      )}

      {/* Sidebar */}
      {!isWelcomeScreen && (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}

      {/* Main Content */}
      <main className=" ">
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </main>
      <Toaster
        toastOptions={{
          style: {
            fontSize: "12px", // make text smaller
            padding: "8px 12px", // optional: adjust padding
          },
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
        }}
      />
      {/* Footer */}
      {!isWelcomeScreen && <Footer />}
    </div>
  );
}

export default App;
