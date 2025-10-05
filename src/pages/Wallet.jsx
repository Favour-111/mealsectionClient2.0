import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Wallet() {
  const [balance, setBalance] = useState(3000);
  const [paymentHistory] = useState([
    { id: "12772798", date: "Aug 5th, 2025. 5:00pm", amount: -2000 },
    { id: "12772799", date: "Aug 6th, 2025. 6:30pm", amount: 5000 },
    { id: "12772800", date: "Aug 7th, 2025. 1:20pm", amount: -1200 },
    { id: "12772801", date: "Aug 7th, 2025. 3:45pm", amount: -800 },
  ]);

  const navigate = useNavigate();

  const handleAddMoney = () => console.log("Add Money clicked");
  const handleRemoveCard = () => console.log("Remove Card clicked");
  const handleAddCard = () => console.log("Add Card clicked");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans relative">
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
          <button
            onClick={() => navigate("/")}
            aria-label="Go back"
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
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
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Wallet</h1>
        </div>
        <button
          onClick={() => navigate("/cart")}
          aria-label="Cart"
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.182 1.705.479 2.196l.678.537M18 21a1 1 0 100-2 1 1 0 000 2zm-6 0a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
        </button>
      </div>

      <main className="relative z-10 p-4 sm:p-6 md:p-8 lg:px-20 space-y-6 flex-grow">
        {/* Available Balance */}
        <div className="bg-black text-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <p className="text-sm sm:text-base opacity-75">Available Balance</p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1">
              N{balance.toLocaleString()}
            </p>
          </div>
          <button
            onClick={handleAddMoney}
            className="mt-4 sm:mt-0 flex items-center bg-red-700 text-white px-4 py-2 rounded-full font-semibold text-sm sm:text-base shadow-md hover:bg-red-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add Money
          </button>
        </div>

        {/* Manage Cards */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Manage Cards</h2>
          <div className="space-y-4">
            {/* Existing Card */}
            <div className="flex items-center justify-between py-2 border-b last:border-b-0">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 002 2v4a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 10a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2z" />
                </svg>
                <span className="text-gray-800 text-sm sm:text-base">**** **** 1234</span>
              </div>
              <button
                onClick={handleRemoveCard}
                aria-label="Remove Card"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.013 21H7.987a2 2 0 01-1.92-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>

            {/* Add New Card */}
            <button
              onClick={handleAddCard}
              className="w-full flex items-center justify-center space-x-2 py-3 text-red-600 font-semibold rounded-md border-2 border-dashed border-red-300 hover:bg-red-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>Add new card</span>
            </button>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Payment History</h2>
          <div className="space-y-2">
            {paymentHistory.map((transaction, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b last:border-b-0"
              >
                <div>
                  <p className="text-sm sm:text-base font-semibold">Order #{transaction.id}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{transaction.date}</p>
                </div>
                <div
                  className={`text-sm sm:text-base font-bold mt-2 sm:mt-0 ${
                    transaction.amount < 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  N{transaction.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Wallet;
