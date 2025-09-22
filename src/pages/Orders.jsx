import { Link } from "react-router-dom";

// A new component to display a single order card
function OrderCard({ order }) {
  const statusColor = order.status === "Ongoing" ? "text-yellow-600" : "text-green-600";
  const statusBg = order.status === "Ongoing" ? "bg-yellow-100" : "bg-green-100";

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{order.vendorName}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor} ${statusBg}`}>
          {order.status}
        </span>
      </div>
      <p className="text-xs text-gray-500 mt-1">Order #{order.orderNumber}</p>
      <p className="text-xs text-gray-500 mt-1">{order.date}</p>
    </div>
  );
}

// Dummy data from the provided image
const dummyOrders = [
  { id: 1, vendorName: "Food Court", orderNumber: "12221198", date: "10th Aug, 2025, 3:30pm", status: "Ongoing" },
  { id: 2, vendorName: "Elegance", orderNumber: "12221198", date: "10th Aug, 2025, 3:30pm", status: "Completed" },
  { id: 3, vendorName: "Elegance", orderNumber: "12221198", date: "10th Aug, 2025, 3:30pm", status: "Completed" },
  { id: 4, vendorName: "Elegance", orderNumber: "12221198", date: "10th Aug, 2025, 3:30pm", status: "Completed" },
];

function Orders() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header section with back button */}
      <div className="p-4 flex items-center bg-white shadow-sm border-b border-gray-200">
        <Link to="/" className="text-gray-600 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h2 className="text-xl font-semibold flex-grow text-center">Orders</h2>
        <span className="w-6"></span> {/* Spacer for alignment */}
      </div>

      <div className="max-w-md mx-auto p-4 space-y-3">
        {dummyOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;