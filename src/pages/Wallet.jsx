import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { GoUpload } from "react-icons/go";
import InputField from "../components/InputField";
import { MdOutlineClose } from "react-icons/md";

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
  const [modal, setModal] = useState(false);

  return (
    <div className="bg-[url('https://png.pngtree.com/png-clipart/20240717/original/pngtree-fast-food-pattern-in-red-png-image_15580267.png')] bg-cover bg-center bg-no-repeat bg-white/97 bg-blend-overlay flex flex-col min-h-screen relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 sm:p-4 p-3 bg-[#fff0] flex items-center justify-between ">
        <div className="flex justify-between w-[100%] items-center ">
          <div className="flex-1">
            <button
              onClick={() => navigate("/home")}
              aria-label="Go back"
              className=" p-2 rounded-md w-[fit-content] hover:bg-gray-100"
            >
              <IoMdArrowBack size={20} />
            </button>
          </div>
          <h1 className="flex-1 text-center text-[20px] font-[600]">Wallet</h1>
          <h1 className="flex-1"></h1>
        </div>
      </div>

      <main className="p-5">
        {/* Available Balance */}
        <div className="bg-[#f6f6f6] rounded-xl  p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <p className="text-[12px]  text-[#787878]">Available Balance</p>
            <p className="text-3xl font-bold mt-1">
              N{balance.toLocaleString()}
            </p>
          </div>
          <button
            onClick={() => setModal(true)}
            className="mt-4 sm:mt-0 flex items-center bg-red-700 text-white px-4 py-2 rounded-[10px] font-[600] text-[13px]  shadow-md hover:bg-red-800 transition-colors"
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
            Add Funds
          </button>
        </div>

        {/* Manage Cards */}
        {/* <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Manage Cards</h2>
          <div className="space-y-4">
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
                <span className="text-gray-800 text-sm sm:text-base">
                  **** **** 1234
                </span>
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
        </div> */}

        {/* Payment History */}
        <div className=" rounded-xl  p-4 sm:p-6 mt-6">
          <h2 className="text-lg sm:text-xl font-[600] text-[#555555] mb-4">
            Payment History
          </h2>
          <div className="space-y-4">
            {paymentHistory.map((transaction, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 "
              >
                <div className="flex items-center gap-2">
                  {!transaction.amount.toString().includes("-") ? (
                    <div className="bg-green-100 text-green-600 rounded-[10px] p-3">
                      <FiDownload />
                    </div>
                  ) : (
                    <div className="bg-red-100 text-red-800 rounded-[10px] p-3">
                      <GoUpload />
                    </div>
                  )}

                  <div>
                    <p className="text-sm  font-[500]">
                      Order #{transaction.id}
                    </p>
                    <p className="text-xs sm:text-sm font-[300] text-gray-500">
                      {transaction.date}
                    </p>
                  </div>
                </div>

                <div
                  className={`text-sm font-[500] mt-2 sm:mt-0 
                  }`}
                >
                  N{transaction.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {modal && (
        <div className="fixed px-7 flex items-center justify-center bg-[#000000a9] top-0 bottom-0 right-0 left-0">
          <div className="relative w-100 bg-white p-5 rounded-[10px]">
            <h1 className="text-center font-[400] ">Wallet Topup</h1>
            <div className="mt-4">
              <label htmlFor="" className="text-sm ">
                Amount to top-up
              </label>
              <InputField type="text" placeholder="Enter amount " />
            </div>
            <button className="w-[100%] bg-[var(--default)] p-2.5 rounded-[10px] hover:opacity-70 duration-300 text-sm text-white">
              Pay Now
            </button>
            <button
              onClick={() => setModal(false)}
              className="absolute top-0 right-0 p-4"
            >
              <MdOutlineClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wallet;
