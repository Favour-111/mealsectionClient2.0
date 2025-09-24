import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const vendorProducts = {
  1: [
    { id: 101, name: "Jollof Rice", price: 1200, image: "https://placehold.co/200x150?text=Jollof+Rice", inStock: true },
    { id: 102, name: "Fried Rice", price: 1300, image: "https://placehold.co/200x150?text=Fried+Rice", inStock: false },
    { id: 103, name: "White Rice", price: 1000, image: "https://placehold.co/200x150?text=White+Rice", inStock: true },
  ],
  2: [
    { id: 201, name: "Burger", price: 1500, image: "https://placehold.co/200x150?text=Burger", inStock: true },
    { id: 202, name: "Pizza", price: 2500, image: "https://placehold.co/200x150?text=Pizza", inStock: false },
  ],
};

function Vendor() {
  const { id } = useParams();
  const { addToCart, cart } = useCart();
  const products = vendorProducts[id] || [];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white shadow-lg min-h-screen">
        
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b border-gray-200">
          <FaBars className="text-xl text-gray-700 cursor-pointer" />
          <img
            src="https://placehold.co/120x50?text=MealSection"
            alt="MealSection Logo"
            className="h-8"
          />
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl text-gray-700" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>
        </header>

        {/* Vendor Banner */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src="https://placehold.co/500x200?text=Vendor+Banner"
            alt="Vendor Banner"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute bottom-4 left-4 text-white text-3xl font-bold drop-shadow">
            Vendor {id}
          </h1>
        </div>

        {/* Categories */}
        <nav className="p-2 border-b border-gray-200 overflow-x-auto whitespace-nowrap">
          <ul className="flex justify-around text-sm font-medium">
            <li><Link to="#" className="p-2 text-gray-500">All</Link></li>
            <li><Link to="#" className="p-2 text-gray-500">Proteins</Link></li>
            <li><Link to="#" className="p-2 text-red-600 border-b-2 border-red-600">Carbohydrates</Link></li>
            <li><Link to="#" className="p-2 text-gray-500">Drinks</Link></li>
            <li><Link to="#" className="p-2 text-gray-500">Pastries</Link></li>
            <li><Link to="#" className="p-2 text-gray-500">Pack</Link></li>
          </ul>
        </nav>

        {/* Product Grid */}
        <main className="grid grid-cols-2 gap-4 p-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden relative"
            >
              {/* Stock Badge */}
              <span
                className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded ${
                  product.inStock ? "bg-red-600 text-white" : "bg-gray-400 text-white"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-28 object-cover"
              />

              <div className="p-3">
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-sm text-gray-600">₦{product.price}</p>
                <button
                  disabled={!product.inStock}
                  onClick={() => addToCart(product)}
                  className={`mt-2 w-full text-sm px-3 py-2 rounded-md ${
                    product.inStock
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Vendor;
