// import React from "react";
// import { FaShoppingCart, FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import { useCart } from "../context/CartContext";


// const products = [
//   { name: "Rice A", price: "1000.00", inStock: true },
//   { name: "Rice B", price: "1000.00", inStock: false },
//   { name: "Rice C", price: "1000.00", inStock: false },
//   { name: "Rice D", price: "1000.00", inStock: true },
// ];

// function Home() {
//   const { cart } = useCart();

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="max-w-md mx-auto bg-white shadow-lg">
//         {/* Header */}
//         <header className="flex justify-between items-center p-4 border-b border-gray-200">
//           <FaBars className="text-xl text-gray-700 cursor-pointer" />

//           <div className="flex items-center space-x-2">
//             <img
//               src="https://example.com/meal-section-logo.png"
//               alt="MealSection Logo"
//               className="h-10"
//             />
//           </div>

//           <Link to="/cart" className="relative">
//             <FaShoppingCart className="text-xl text-gray-700 cursor-pointer" />
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
//                 {cart.length}
//               </span>
//             )}
//           </Link>
//         </header>

//         {/* Banner */}
//         <main>
//           <div className="relative h-48 w-full overflow-hidden">
//             <img
//               src="https://example.com/elegance-banner.jpg"
//               alt="Elegance"
//               className="w-full h-full object-cover"
//             />
//             <h1 className="absolute bottom-4 left-4 text-white text-4xl font-bold">
//               Elegance
//             </h1>
//           </div>

//           {/* Category Navigation */}
//           <nav className="p-2 border-b border-gray-200 overflow-x-auto whitespace-nowrap">
//             <ul className="flex justify-around">
//               <li>
//                 <Link
//                   to="/meals"
//                   className="p-2 text-gray-500 font-medium hover:text-red-500"
//                 >
//                   All
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/meals/proteins"
//                   className="p-2 text-gray-500 font-medium hover:text-red-500"
//                 >
//                   Proteins
//                 </Link>
//               </li>
//               <li className="relative">
//                 <Link
//                   to="/meals/carbohydrates"
//                   className="p-2 text-red-500 font-medium border-b-2 border-red-500"
//                 >
//                   Carbohydrates
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/meals/drinks"
//                   className="p-2 text-gray-500 font-medium hover:text-red-500"
//                 >
//                   Drinks
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/meals/pastries"
//                   className="p-2 text-gray-500 font-medium hover:text-red-500"
//                 >
//                   Pastries
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/meals/pack"
//                   className="p-2 text-gray-500 font-medium hover:text-red-500"
//                 >
//                   Pack
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* Product Grid */}
//           <section className="grid grid-cols-2 gap-4 p-4">
//             {products.map((product, index) => (
//               <ProductCard
//                 key={index}
//                 name={product.name}
//                 price={product.price}
//                 inStock={product.inStock}
//                 image="https://example.com/rice-image.jpg"
//               />
//             ))}
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Home;




import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Home component
function Home() {
    const navigate = useNavigate();
  const [balance, setBalance] = useState(50000);
  const [searchQuery, setSearchQuery] = useState("");
  

  const featuredVendors = [
    { name: "Elegance", rating: 4.5, time: "20-30 mins", status: "Open", imageUrl: "https://placehold.co/400x300/e9e9e9/585858?text=Vendor" },
    { name: "Food Court", rating: 4.0, time: "20-40 mins", status: "Closed", imageUrl: "https://placehold.co/400x300/e9e9e9/585858?text=Vendor" },
  ];

  const allVendors = [
    { name: "Elegance", rating: 4.0, time: "20-40 mins", status: "Open", imageUrl: "https://placehold.co/400x300/e9e9e9/585858?text=Vendor" },
    { name: "Food Court", rating: 4.0, time: "20-40 mins", status: "Closed", imageUrl: "https://placehold.co/400x300/e9e9e9/585858?text=Vendor" },
    { name: "Elegance", rating: 4.0, time: "20-40 mins", status: "Open", imageUrl: "https://placehold.co/400x300/e9e9e9/585858?text=Vendor" },
    { name: "Food Court", rating: 4.0, time: "20-40 mins", status: "Closed", imageUrl: "https://placehold.co/400x300/e9e9e9/585858?text=Vendor" },
    { name: "Elegance", rating: 4.0, time: "20-40 mins", status: "Open", imageUrl: "https://placehold.co/400x300/e9e9e9/585858?text=Vendor" },
  ];

  const handleTopUp = () => {
    navigate("/wallet");
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C9289' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 60v-2.32L54.12 0H60v2.32L5.88 60H0zm60 0v-2.32L5.88 0H0v2.32L54.12 60H60z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Header */}
      <div className="relative z-10 p-4 bg-white flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-2">
          <button aria-label="Menu" className="p-2 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <img
            src="https://placehold.co/120x80/000000/FFF.png?text=Logo"
            alt="Mealsection Logo"
            className="h-8"
          />
        </div>
        <button aria-label="Cart" className="p-2 rounded-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.182 1.705.479 2.196l.678.537M18 21a1 1 0 100-2 1 1 0 000 2zm-6 0a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
        </button>
      </div>

      <main className="relative z-10 p-4 space-y-6">
        {/* Wallet Balance */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Wallet Balance</p>
            <p className="text-xl font-bold text-red-600 mt-1">N{balance.toLocaleString()}</p>
          </div>
          <button
            onClick={handleTopUp}
            className="bg-red-700 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:bg-red-800 transition-colors"
          >
            Top Up
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search Vendors or Meals"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* Featured Vendors */}
        <div>
          <h2 className="text-xl font-bold mb-4">Featured Vendors</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {featuredVendors.map((vendor, index) => (
              <div key={index} className="flex-none w-56 bg-white rounded-xl shadow-md overflow-hidden">
                <img src={vendor.imageUrl} alt={vendor.name} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{vendor.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{vendor.rating}</span>
                    <span className="mx-2">|</span>
                    <span>{vendor.time}</span>
                    <span className="mx-2">|</span>
                    <span className={`font-semibold ${vendor.status === "Open" ? "text-green-500" : "text-red-500"}`}>
                      {vendor.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Vendors */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">All Vendors</h2>
            <a href="#" className="text-red-600 font-semibold hover:underline">
              Show All
            </a>
          </div>
          <div className="space-y-4">
            {allVendors.map((vendor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4">
                <img src={vendor.imageUrl} alt={vendor.name} className="w-24 h-24 object-cover rounded-xl" />
                <div>
                  <h3 className="text-lg font-bold">{vendor.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{vendor.rating}</span>
                    <span className="mx-2">|</span>
                    <span>{vendor.time}</span>
                    <span className="mx-2">|</span>
                    <span className={`font-semibold ${vendor.status === "Open" ? "text-green-500" : "text-red-500"}`}>
                      {vendor.status}
                    </span>
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