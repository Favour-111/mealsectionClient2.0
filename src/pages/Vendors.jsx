import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import React, { useState } from "react";
import { IoIosPricetags } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { LuDownload, LuRefreshCw } from "react-icons/lu";
import vendors from "../components/Vendors";
function Vendors() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [balance] = useState(50000);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState("");

  return (
    <div className="bg-[url('https://png.pngtree.com/png-clipart/20240717/original/pngtree-fast-food-pattern-in-red-png-image_15580267.png')] bg-cover bg-center bg-no-repeat bg-white/97 bg-blend-overlay flex flex-col min-h-screen relative overflow-hidden">
      <main className="p-5">
        {/* Wallet Balance */}
        <div className=" flex flex-col gap-2">
          <div>
            <p className="text-[17px] font-[sans-serif]  font-bold text-gray-800 mt-1">
              Wallet Balance
            </p>
            <p className="font-[Inter] text-sm text-[#787878]">
              ₦{balance.toLocaleString()}.00
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/wallet")}
              className="h-12 w-12 bg-[#f1f1f1] flex items-center justify-center rounded-full"
            >
              <LuDownload />
            </button>
            <button
              onClick={() => navigate("/wallet")}
              className="h-12 w-12 bg-[#f1f1f1] flex items-center justify-center rounded-full"
            >
              <LuRefreshCw />
            </button>
            <button
              onClick={() => navigate("/wallet")}
              className="h-12 w-12 bg-[#f1f1f1] flex items-center justify-center rounded-full"
            >
              <FiUser />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative my-5">
          <div className="rounded-[10px] border bg-transparent border-[#d3d3d3] flex items-center px-4 py-2">
            <input
              type="text"
              value={form}
              onChange={(e) => {
                const value = e.target.value;
                setForm(value);
                setOpen(value.length > 0); // ✅ opens dropdown when typing more than 1 char
              }}
              placeholder="Search Vendors or Meals"
              className="w-full placeholder:text-sm text-sm bg-transparent outline-none md:text-base text-gray-700"
            />
          </div>

          {/* Search Results Dropdown */}
          {open && (
            <div className="bg-white absolute mt-2 w-full rounded-[10px] shadow-md max-h-60 overflow-y-auto z-10">
              {vendors
                .filter((item) =>
                  item.name.toLowerCase().includes(form.toLowerCase())
                )
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 hover:bg-[#f6f6f6] p-3 duration-200 cursor-pointer"
                    onClick={() => {
                      navigate(`/vendor/${item.name}`);
                      setForm("");
                      setOpen(false);
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWAQ2R-cEo2SpkEW3j0LP49tqBUCiJupF3g&s"
                      width={40}
                      className="rounded"
                      alt={item.name}
                    />
                    <div className="text-sm text-gray-600">{item.name}</div>
                  </div>
                ))}

              {/* No match message */}
              {vendors.filter((item) =>
                item.name.toLowerCase().includes(form.toLowerCase())
              ).length === 0 && (
                <div className="p-3 text-sm text-gray-500 italic">
                  No vendors found.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Featured Vendors */}
        <div>
          <h2 className="text-lg font-bold my-5">Featured Vendors</h2>
          <div className="flex overflow-x-scroll space-x-4 scrollbar-hide pb-2">
            {vendors.map((vendor) => (
              <div
                key={vendor.id}
                className="flex-none w-[47%] sm:w-48 md:w-56  cursor-pointer"
                onClick={() => navigate(`/vendor/${vendor.name}`)}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWAQ2R-cEo2SpkEW3j0LP49tqBUCiJupF3g&s"
                  alt={vendor.name}
                  className="w-full h-30 md:h-32 object-cover rounded-[10px]"
                />
                <div className="p-2">
                  <h3 className="text-sm md:text-base font-semibold">
                    {vendor.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <div className="mb-1">
                      <FaStar color="orange" size={17} />
                    </div>
                    <div className="text-[12px] whitespace-nowrap flex items-center gap-2 font-[300] text-gray-500">
                      ({vendor.rating})
                    </div>
                  </div>

                  <div className="text-sm whitespace-nowrap flex items-center gap-2 font-[300] text-gray-500">
                    <div>{vendor.time} </div>
                    <div>|</div>
                    <div
                      className={
                        vendor.status === "Open"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {vendor.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Vendors */}
        <div>
          <div className="flex justify-between items-center mt-8 mb-3">
            <h2 className="text-lg font-bold ">All Vendors</h2>
          </div>
          <div className="flex flex-col gap-3">
            {vendors.map((vendor) => (
              <div
                key={vendor.id}
                className="bg-white rounded-xl shadow p-3 flex items-center justify-between cursor-pointer hover:shadow-md"
                onClick={() => navigate(`/vendor/${vendor.name}`)}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWAQ2R-cEo2SpkEW3j0LP49tqBUCiJupF3g&s"
                    alt={vendor.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">
                      {vendor.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-2">
                      <div>
                        <FaStar color="orange" size={17} />
                      </div>
                      <p className="text-xs font-[300] md:text-sm text-gray-500">
                        {vendor.rating} | {vendor.time} |{" "}
                        <span
                          className={
                            vendor.status === "Open"
                              ? "text-green-600"
                              : "text-red-600"
                          }
                        >
                          {vendor.status}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Vendors;
