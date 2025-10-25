import React from "react";
import OrderTimeline from "../components/OrderTimeline";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const timelineData = [
    { status: "Pending", time: "11:30am", completed: true },
    { status: "Processing", time: "11:40am", completed: true },
    { status: "Rider Assigned", time: "11:50am", completed: true },
    { status: "On the way", time: "11:55am", completed: false },
    { status: "Delivered", time: null, completed: false },
  ];

  const riderDetails = {
    name: "John Doe",
    phone: "091-XXXX-9999",
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
  };

  const billDetails = {
    subtotal: 2000,
    serviceFee: 200,
    deliveryFee: 200,
  };

  const total =
    billDetails.subtotal + billDetails.serviceFee + billDetails.deliveryFee;

  return (
    <div className="bg-[url('https://png.pngtree.com/png-clipart/20240717/original/pngtree-fast-food-pattern-in-red-png-image_15580267.png')] px-4 sm:px-10 bg-cover bg-center bg-no-repeat bg-white/97 bg-blend-overlay flex flex-col min-h-screen relative overflow-hidden">
      {/* Header */}
      <header className="flex items-center py-4">
        <Link to="/orders">
          <FaArrowLeft className="text-gray-600 cursor-pointer" />
        </Link>
        <h1 className="flex-1 text-center text-lg md:text-xl font-semibold text-gray-800">
          Order #12211112
        </h1>
        <span className="w-6"></span> {/* Spacer */}
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto py-4">
        <div className="">
          {/* Timeline */}
          <OrderTimeline data={timelineData} />

          {/* Rider Details */}
          <div className="mt-10">
            <h2 className="text-sm font-[600] text-gray-800 mb-4">
              Rider Details
            </h2>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm">
              <div className="w-13 h-13 rounded-full overflow-hidden">
                <img
                  src={riderDetails.image}
                  alt={riderDetails.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-base  font-[500]">{riderDetails.name}</p>
                <p className="text-sm mt-3 text-gray-500">
                  {riderDetails.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Bill Summary */}
          <div className="mt-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">Subtotal</span>
                <span className="font-[400] text-sm text-gray-400">
                  ${billDetails.subtotal}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">Service Fee</span>
                <span className="font-[400] text-sm text-gray-400">
                  ${billDetails.serviceFee}
                </span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 text-sm">Delivery Fee</span>
                <span className="font-[400] text-sm text-gray-400">
                  ${billDetails.deliveryFee}
                </span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-base font-[600] text-green-500">
                  TOTAL
                </span>
                <span className="text-lg font-bold text-gray-600">
                  ${total}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderDetails;
