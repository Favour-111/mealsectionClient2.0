import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

// A component to display a single order card
function OrderCard({ order }) {
  const statusColor =
    order.status === "Ongoing" ? "text-yellow-600" : "text-green-600";
  const statusBg =
    order.status === "Ongoing" ? "bg-transparent" : "bg-transparent";

  return (
    <div className="w-[100%] bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <h3 className="font-[600] text-base md:text-lg">{order.vendorName}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs md:text-sm font-[400] ${statusColor} ${statusBg}`}
        >
          {order.status}
        </span>
      </div>
      <p className="text-xs md:text-sm text-gray-500 mt-1">
        Order #{order.orderNumber}
      </p>
      <p className="text-xs md:text-sm text-gray-500 mt-1">{order.date}</p>
    </div>
  );
}

// Dummy data
const dummyOrders = [
  {
    id: 1,
    vendorName: "Food Court",
    orderNumber: "12221198",
    date: "10th Aug, 2025, 3:30pm",
    status: "Ongoing",
  },
  {
    id: 2,
    vendorName: "Elegance",
    orderNumber: "12221198",
    date: "10th Aug, 2025, 3:30pm",
    status: "Completed",
  },
  {
    id: 3,
    vendorName: "Elegance",
    orderNumber: "12221198",
    date: "10th Aug, 2025, 3:30pm",
    status: "Completed",
  },
  {
    id: 4,
    vendorName: "Elegance",
    orderNumber: "12221198",
    date: "10th Aug, 2025, 3:30pm",
    status: "Completed",
  },
];

function Orders() {
  return (
    <div className="bg-[url('https://png.pngtree.com/png-clipart/20240717/original/pngtree-fast-food-pattern-in-red-png-image_15580267.png')] bg-cover bg-center bg-no-repeat bg-white/97 bg-blend-overlay flex flex-col min-h-screen relative overflow-hidden">
      {/* Header with back button */}
      <div className="p-4 flex items-center bg-white  ">
        <Link to="/home" className="text-gray-600 mr-4">
          <MdOutlineKeyboardBackspace size={20} />
        </Link>
        <h2 className="text-lg md:text-xl font-semibold flex-grow text-center">
          Orders
        </h2>
        <span className="w-6"></span> {/* Spacer */}
      </div>

      {/* Orders list (always 1 column) */}
      <div className="p-4  space-y-4">
        {dummyOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
