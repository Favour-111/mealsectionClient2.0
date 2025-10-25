import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CgTrash } from "react-icons/cg";
import InputField from "../components/InputField";
function Cart() {
  const { cart, removeFromCart, updateQuantity, totalAmount } =
    useCartContext();
  const navigate = useNavigate();
  // Extra fees
  const serviceFee = 200;
  const [deliveryFee, setDeliveryFee] = useState(200);

  // Final total
  const grandTotal = totalAmount + serviceFee + deliveryFee;

  return (
    <div className="bg-[url('https://png.pngtree.com/png-clipart/20240717/original/pngtree-fast-food-pattern-in-red-png-image_15580267.png')] bg-cover bg-center bg-no-repeat bg-white/97 bg-blend-overlay flex flex-col min-h-screen relative overflow-hidden px-5 sm:px-9 ">
      <div className="flex mb-6 sm:mt-10 mt-5">
        <button onClick={() => navigate(-1)} className="flex-1 text-start">
          <IoMdArrowBack size={20} />
        </button>
        <div className="flex-1 text-center font-[600] ">Cart</div>
        <div className="flex-1"></div>
      </div>
      <h1 className="font-[500] text-sm mb-1">Pack1</h1>
      {cart.length === 0 ? (
        <div className="flex h-[80vh] justify-center flex-col items-center gap-4">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
              alt=""
              className="sm:w-100 w-60"
            />
          </div>

          <h1 className="text-sm text-[#787878]">
            Your cart is currently empty
          </h1>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between  rounded-lg p-3 mb-3 shadow bg-white"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image || "https://via.placeholder.com/60"}
                  alt={item.name}
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm mt-3">${item.price}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-7 h-7 flex items-center justify-center bg-amber-400 rounded"
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-7 h-7 flex items-center justify-center bg-amber-400 rounded"
                  >
                    +
                  </button>
                </div>
                <div className=" text-end mt-3">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 ml-2 text-end"
                  >
                    <CgTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add Another Pack */}
          <button className="text-black bg-[#f6f6f6] w-fit px-4 py-2 rounded text-sm text-start  mb-4">
            + Add Another Pack
          </button>

          {/* Delivery Address */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">
              Delivery Address
            </label>
            <InputField type="text" placeholder="Enter delivery Address" />
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
              className="w-full accent-[var(--default)] "
            />
            <p className="text-sm text-gray-500">Selected: ${deliveryFee}</p>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center font-bold text-lg mb-4">
            <span className="text-green-500 text-[16px] font-[500]">Total</span>
            <span className="text-[15px] text-[#787878] font-[400]">
              ${grandTotal.toFixed(2)}
            </span>
          </div>

          {/* Payment Option */}
          <div className="bg-[#f1f1f1] text-white p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-[#000]">Pay with Wallet</p>
                <p className="text-sm mt-2 text-[#787878]">Avail. Bal: $3000</p>
              </div>
              <input type="radio" checked readOnly />
            </div>
          </div>

          {/* Confirm Button */}
          <button className="w-full bg-red-600 text-white py-3 rounded-lg text-sm">
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
