import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import CartItem from "../components/CartItem";

// ✅ Simple message component
function Message({ text, type }) {
  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-md text-sm font-medium ${
        type === "error"
          ? "bg-red-100 text-red-600 border border-red-400"
          : "bg-green-100 text-green-600 border border-green-400"
      }`}
    >
      {text}
    </div>
  );
}

function Cart() {
  const navigate = useNavigate(); // ✅ hook from react-router-dom
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [adjustFee, setAdjustFee] = useState(0);
  const [dummyCart] = useState([
    { id: 1, name: "White Rice", price: 1000, quantity: 2 },
  ]);
  const [message, setMessage] = useState(null);

  // Fee calculations
  const subtotal = dummyCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const serviceFee = 200;
  const deliveryFee = 200;
  const total = subtotal + serviceFee + deliveryFee + adjustFee;
  const walletBalance = 3000;

  // Handlers
  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (deliveryAddress === "") {
      setMessage({ text: "Please enter a delivery address.", type: "error" });
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    setMessage({ text: "Order Confirmed!", type: "success" });

    // ✅ Navigate after short delay
    setTimeout(() => {
      setMessage(null);
      navigate("/orderdetils"); // <-- goes to OrderDetails
    }, 1500);
  };

  const handleBack = () => {
    navigate("/"); // ✅ back to home
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 relative">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="p-4 flex items-center border-b">
          <button onClick={handleBack} className="text-gray-600 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h2 className="text-xl font-semibold flex-grow text-center">Cart</h2>
          <span className="w-6"></span>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          <h3 className="text-sm font-semibold text-gray-800">Pack 1</h3>
          {dummyCart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          {/* Delivery Address */}
          <div className="border-t pt-4 space-y-2">
            <h3 className="text-sm font-semibold text-gray-800">
              Delivery Address
            </h3>
            <input
              type="text"
              placeholder="Enter your delivery address"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Price Breakdown */}
          <div className="border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₦{subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Service Fee</span>
              <span>₦{serviceFee}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span>₦{deliveryFee}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Adjust Delivery Fee</span>
              <span className="text-red-600">-₦{adjustFee}</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t mt-4">
              <span>TOTAL</span>
              <span>₦{total}</span>
            </div>
          </div>

          {/* Wallet + Confirm */}
          <div className="space-y-4 border-t pt-4">
            <div className="flex items-center justify-between bg-black text-white p-3 rounded-md">
              <span>Pay with Wallet</span>
              <span className="text-sm">Avail. Bal: ₦{walletBalance}</span>
            </div>
            <button
              onClick={handleConfirmOrder}
              className="w-full bg-red-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-red-700"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>

      {message && <Message text={message.text} type={message.type} />}
    </div>
  );
}

export default Cart;
