// import { useState } from "react";
// import { useCartContext } from "../context/CartContext";

// function Cart() {
//   const { cart, removeFromCart, updateQuantity, totalAmount } = useCartContext();

//   // Extra fees
//   const serviceFee = 200;
//   const [deliveryFee, setDeliveryFee] = useState(200);

//   // Final total
//   const grandTotal = totalAmount + serviceFee + deliveryFee;

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-md p-4 rounded-lg">
//       <h2 className="text-xl font-bold mb-3">🛒 Cart</h2>

//       {cart.length === 0 ? (
//         <p className="text-gray-500 text-center">Your cart is empty.</p>
//       ) : (
//         <>
//           {/* Cart Items */}
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between border rounded-lg p-3 mb-3 shadow-sm"
//             >
//               <div className="flex items-center gap-3">
//                 <img
//                   src={item.image || "https://via.placeholder.com/60"}
//                   alt={item.name}
//                   className="w-14 h-14 rounded-md object-cover"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{item.name}</h3>
//                   <p className="text-gray-500 text-sm">
//                     ${item.price} × {item.quantity}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => updateQuantity(item.id, -1)}
//                   className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
//                 >
//                   -
//                 </button>
//                 <span className="font-semibold">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item.id, 1)}
//                   className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 ml-2"
//                 >
//                   🗑
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Add Another Pack */}
//           <button className="text-red-500 text-sm font-semibold mb-4">
//             + Add Another Pack
//           </button>

//           {/* Delivery Address */}
//           <div className="mb-4">
//             <label className="block text-gray-600 text-sm mb-1">
//               Delivery Address
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Delivery Address"
//               className="w-full border rounded-md p-2"
//             />
//           </div>

//           {/* Fees */}
//           <div className="space-y-1 text-sm text-gray-600 mb-4">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>${totalAmount.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Service Fee</span>
//               <span>${serviceFee}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Delivery Fee</span>
//               <span>${deliveryFee}</span>
//             </div>
//           </div>

//           {/* Adjust Delivery Fee */}
//           <div className="mb-4">
//             <label className="block text-gray-600 text-sm mb-1">
//               Adjust Delivery Fee (Min: $50)
//             </label>
//             <input
//               type="range"
//               min="50"
//               max="500"
//               value={deliveryFee}
//               onChange={(e) => setDeliveryFee(Number(e.target.value))}
//               className="w-full accent-red-500"
//             />
//             <p className="text-sm text-gray-500">Selected: ${deliveryFee}</p>
//           </div>

//           {/* Total */}
//           <div className="flex justify-between items-center font-bold text-lg mb-4">
//             <span className="text-green-600">TOTAL</span>
//             <span>${grandTotal.toFixed(2)}</span>
//           </div>

//           {/* Payment Option */}
//           <div className="bg-black text-white p-3 rounded-lg mb-4">
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="font-semibold">Pay with Wallet</p>
//                 <p className="text-sm text-gray-300">Avail. Bal: $3000</p>
//               </div>
//               <input type="radio" checked readOnly />
//             </div>
//           </div>

//           {/* Confirm Button */}
//           <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
//             Confirm Order
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;

import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ import

function Cart() {
  const { cart, removeFromCart, updateQuantity, totalAmount } = useCartContext();
  const navigate = useNavigate(); // ✅ hook

  // Extra fees
  const serviceFee = 200;
  const [deliveryFee, setDeliveryFee] = useState(200);

  // Final total
  const grandTotal = totalAmount + serviceFee + deliveryFee;

  // ✅ Handle order confirmation
  const handleConfirmOrder = () => {
    // You can also save order to backend here before navigating
    console.log("Order confirmed:", {
      items: cart,
      subtotal: totalAmount,
      serviceFee,
      deliveryFee,
      total: grandTotal,
    });

    // Redirect to orders page
    navigate("/orders");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-3">🛒 Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-lg p-3 mb-3 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image || "https://via.placeholder.com/60"}
                  alt={item.name}
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 ml-2"
                >
                  🗑
                </button>
              </div>
            </div>
          ))}

          {/* Add Another Pack */}
          <button className="text-red-500 text-sm font-semibold mb-4">
            + Add Another Pack
          </button>

          {/* Delivery Address */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">
              Delivery Address
            </label>
            <input
              type="text"
              placeholder="Enter Delivery Address"
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Fees */}
          <div className="space-y-1 text-sm text-gray-600 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span>${serviceFee}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>
          </div>

          {/* Adjust Delivery Fee */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">
              Adjust Delivery Fee (Min: $50)
            </label>
            <input
              type="range"
              min="50"
              max="500"
              value={deliveryFee}
              onChange={(e) => setDeliveryFee(Number(e.target.value))}
              className="w-full accent-red-500"
            />
            <p className="text-sm text-gray-500">Selected: ${deliveryFee}</p>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center font-bold text-lg mb-4">
            <span className="text-green-600">TOTAL</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>

          {/* Payment Option */}
          <div className="bg-black text-white p-3 rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Pay with Wallet</p>
                <p className="text-sm text-gray-300">Avail. Bal: $3000</p>
              </div>
              <input type="radio" checked readOnly />
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirmOrder} // ✅ click handler
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold"
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;

