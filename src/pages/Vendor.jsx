import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import toast from "react-hot-toast";
import vendors from "../components/Vendors";
import { useState } from "react";

const vendorProducts = [
  // Elegance Cafeteria
  {
    id: 101,
    vendorName: "Elegance Cafeteria",
    name: "Jollof Rice",
    category: "Carbohydrates",
    price: 1200,
    image:
      "https://allnigerianfoods.com/wp-content/uploads/jollof_rice_recipe1.jpg",
    inStock: true,
  },
  {
    id: 102,
    vendorName: "Elegance Cafeteria",
    name: "Fried Rice",
    category: "Carbohydrates",
    price: 1300,
    image:
      "https://allnigerianfoods.com/wp-content/uploads/jollof_rice_recipe1.jpg",
    inStock: false,
  },
  {
    id: 103,
    vendorName: "Elegance Cafeteria",
    name: "Grilled Chicken",
    category: "Proteins",
    price: 1500,
    image: "https://placehold.co/200x150?text=Grilled+Chicken",
    inStock: true,
  },

  // Sunrise Bakery
  {
    id: 201,
    vendorName: "Sunrise Bakery",
    name: "Chocolate Cake",
    category: "Pastries",
    price: 2000,
    image: "https://placehold.co/200x150?text=Chocolate+Cake",
    inStock: true,
  },
  {
    id: 202,
    vendorName: "Sunrise Bakery",
    name: "Croissant",
    category: "Pastries",
    price: 800,
    image: "https://placehold.co/200x150?text=Croissant",
    inStock: true,
  },
  {
    id: 203,
    vendorName: "Sunrise Bakery",
    name: "Latte",
    category: "Drinks",
    price: 500,
    image: "https://placehold.co/200x150?text=Latte",
    inStock: true,
  },

  // Green Garden Restaurant
  {
    id: 301,
    vendorName: "Green Garden Restaurant",
    name: "Steak",
    category: "Proteins",
    price: 3000,
    image: "https://placehold.co/200x150?text=Steak",
    inStock: true,
  },
  {
    id: 302,
    vendorName: "Green Garden Restaurant",
    name: "Mashed Potatoes",
    category: "Carbohydrates",
    price: 1000,
    image: "https://placehold.co/200x150?text=Mashed+Potatoes",
    inStock: true,
  },
];

function Vendor() {
  const { addToCart, cart } = useCart();

  const { name } = useParams(); // get vendor name from URL
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Proteins",
    "Carbohydrates",
    "Drinks",
    "Pastries",
    "Pack",
  ];

  const vendor = vendors.find((v) => v.name === name);
  const filteredProducts = vendorProducts.filter(
    (p) =>
      p.vendorName === name &&
      (selectedCategory === "All" || p.category === selectedCategory)
  );
  return (
    <div className="bg-[url('https://png.pngtree.com/png-clipart/20240717/original/pngtree-fast-food-pattern-in-red-png-image_15580267.png')] bg-cover bg-center bg-no-repeat bg-white/97 bg-blend-overlay flex flex-col min-h-screen relative overflow-hidden">
      {/* Vendor Banner */}
      <div className="relative h-40 sm:h-56 md:h-72 lg:h-80 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1528952686551-542043782ab9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVuZG9yfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
          alt="Vendor Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-center font-[600] text-[20px] mt-8 mb-3">
        {vendor.name}
      </h1>
      {/* Categories */}
      <nav className="px-5 overflow-x-scroll sm:overflow-x-hidden whitespace-nowrap">
        <ul className="flex sm:justify-center space-x-4 text-sm sm:text-base font-medium">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                to="#"
                className={`p-2 text-sm font-[400] duration-200 ${
                  selectedCategory === cat
                    ? "text-[var(--default)] font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Product Grid */}
      <main className="grid grid-cols-2 mb-10 d:mt-20 mt-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 p-4">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full h-[50vh] flex flex-col items-center justify-center">
            <img
              src="
            https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-illustration-svg-download-png-6430781.png"
              alt=""
              width={200}
            />
            <p className=" text-center text-gray-500 mt-10">
              No products here.
            </p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-[14px] overflow-hidden shadow-sm"
            >
              {/* Product Image */}
              <div className="w-[100%]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-[100%] h-[200px] object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="mt-5 px-3 mb-3">
                <span
                  className={`absolute top-3 right-4 px-3 py-1 text-[11px] font-[500] rounded-[10px] ${
                    product.inStock
                      ? "bg-green-50 text-green-500"
                      : "bg-[tomato] text-white"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
                <p className="text-gray-500 font-[300] text-[12px]">
                  {product.category}
                </p>
                <h3 className="font-[500] text-sm mt-1 text-gray-800">
                  {product.name}
                </h3>
                <p className="font-[700] text-[14px] mt-1 text-gray-900">
                  ₦{product.price.toLocaleString()}
                </p>

                {/* Add to Cart Button */}
                <button
                  disabled={!product.inStock}
                  onClick={() => {
                    addToCart(product);
                    toast.success(`${product.name} has been added to cart`);
                  }}
                  className={`mt-3 w-full py-[9px] rounded-[14px] font-[500] text-[13px] ${
                    cart.find((item) => item.id === product.id)
                      ? "bg-red-300 text-white hover:bg-red-700 transition"
                      : product.inStock
                      ? "bg-red-600 text-white hover:bg-red-700 transition"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  {cart.find((item) => item.id === product.id)
                    ? "Item in cart"
                    : product.inStock
                    ? "Add to Cart"
                    : "Out of Stock"}
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default Vendor;
