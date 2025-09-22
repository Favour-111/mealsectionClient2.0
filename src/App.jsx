import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Navbar"; // This is your new sidebar component
import Footer from "./components/Footer";
import routes from "./routes";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header with hamburger menu to toggle the sidebar */}
      <header className="p-4 flex justify-between items-center bg-white shadow-md">
        <button onClick={toggleSidebar}>
          {/* Hamburger menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* You can add your app logo or title here as well */}
        <h1 className="text-xl font-bold text-red-600">MealSection</h1>
      </header>
      
      {/* Sidebar component, its visibility is controlled by the isSidebarOpen state */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;