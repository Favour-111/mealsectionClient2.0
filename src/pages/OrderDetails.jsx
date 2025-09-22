import React from 'react';
import OrderTimeline from '../components/OrderTimeline';
import { FaArrowLeft } from 'react-icons/fa';

const OrderDetails = () => {
  const timelineData = [
    { status: 'Pending', time: '11:30am', completed: true },
    { status: 'Processing', time: '11:40am', completed: true },
    { status: 'Rider Assigned', time: '11:50am', completed: true },
    { status: 'On the way', time: '11:55am', completed: false },
    { status: 'Delivered', time: null, completed: false },
  ];

  const riderDetails = {
    name: 'John Doe',
    phone: '091-XXXX-9999',
    image: 'https://example.com/rider-john-doe.jpg',
  };

  const billDetails = {
    subtotal: 2000,
    serviceFee: 200,
    deliveryFee: 200,
  };

  const total = billDetails.subtotal + billDetails.serviceFee + billDetails.deliveryFee;

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50">
      <header className="flex items-center p-4">
        <FaArrowLeft className="text-gray-600" />
        <h1 className="flex-1 text-center text-lg font-semibold text-gray-800">Order #12211112</h1>
      </header>

      <main className="flex-1 overflow-y-auto p-6 relative">
        <OrderTimeline data={timelineData} />

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Rider Details</h2>
          <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src={riderDetails.image} alt={riderDetails.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-lg font-semibold">{riderDetails.name}</p>
              <p className="text-sm text-gray-500">{riderDetails.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-800">${billDetails.subtotal}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Service Fee</span>
              <span className="font-medium text-gray-800">${billDetails.serviceFee}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium text-gray-800">${billDetails.deliveryFee}</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <span className="text-lg font-bold text-green-500">TOTAL</span>
              <span className="text-lg font-bold text-gray-800">${total}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderDetails;