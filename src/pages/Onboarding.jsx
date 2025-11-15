import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Onboarding() {
  const [university, setUniversity] = useState(
    () => localStorage.getItem("preferredUniversity") || ""
  );
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    if (!university) {
      toast.error("Please select your university first");
      return;
    }
    localStorage.setItem("preferredUniversity", university);
    navigate("/login");
  };

  useEffect(() => {
    const fetchUniversities = async () => {
      setLoading(true);
      try {
        const API = import.meta.env.VITE_REACT_APP_API;
        const { data } = await axios.get(`${API}/api/universities`);
        // Expecting array of universities with name property
        const list = Array.isArray(data)
          ? data
          : Array.isArray(data?.universities)
          ? data.universities
          : [];
        setUniversities(list);
      } catch (e) {
        toast.error("Failed to load universities");
      } finally {
        setLoading(false);
      }
    };
    fetchUniversities();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return universities;
    return universities.filter((u) =>
      (u.name || u.title || "").toLowerCase().includes(q)
    );
  }, [universities, search]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-5 md:px-8 py-4 border-b border-gray-100 bg-white/70 backdrop-blur">
        <img
          src="https://favour-111.github.io/MEalSection-ComongSoon-2.0/WhatsApp%20Image%202024-08-24%20at%2020.18.12_988ce6f9.jpg"
          alt="MealSection"
          className="w-32 md:w-36"
        />
        <div className="text-xs md:text-sm">
          <Link
            to="/login"
            className="text-[var(--default)] font-medium hover:underline"
          >
            Login
          </Link>
          <span className="mx-1">/</span>
          <Link
            to="/signup"
            className="text-[var(--default)] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="px-5 md:px-8 mt-6 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
          Choose your university
        </h1>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto text-xs md:text-sm">
          This helps us tailor restaurants, fees and delivery availability to
          your campus.
        </p>
      </div>

      {/* Content card */}
      <div className="flex-1 flex items-center justify-center px-5 md:px-8 pb-12">
        <div className="w-full max-w-xl bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6">
          {/* Labels */}
          <label className="block text-xs font-medium text-gray-600 mb-2">
            Search
          </label>
          <input
            type="text"
            placeholder="Type to filter your university"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border placeholder:text-[12px] text-[12px] border-gray-200 rounded-lg px-3 py-2 text-xs md:text-sm focus:border-gray-400"
          />

          <label className="block text-xs font-medium text-gray-600 mt-4 mb-2">
            University
          </label>
          <select
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            className="w-full placeholder:text-[12px] text-[12px] border border-gray-200 rounded-lg px-3 py-2  bg-white focus:border-gray-400"
            disabled={loading}
          >
            <option value="" className="text-[12px]" disabled>
              {loading ? "Loading universities…" : "Choose University"}
            </option>
            {filtered.map((u) => (
              <option
                className="text-[12px]"
                key={u._id || u.name}
                value={u.name}
              >
                {u.name}
              </option>
            ))}
          </select>
          {!loading && filtered.length === 0 && (
            <p className="mt-2 text-xs text-gray-500">
              No match. Try another search.
            </p>
          )}

          {/* Role buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-5">
            <button
              onClick={() => handleRoleSelect("customer")}
              className="px-3 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50 transition text-xs md:text-sm disabled:opacity-50"
              disabled={!university}
            >
              Customer
            </button>
            <button
              onClick={() => handleRoleSelect("vendor")}
              className="px-3 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50 transition text-xs md:text-sm disabled:opacity-50"
              disabled={!university}
            >
              Vendor
            </button>
            <button
              onClick={() => handleRoleSelect("rider")}
              className="px-3 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition text-xs md:text-sm disabled:opacity-50"
              disabled={!university}
            >
              Rider
            </button>
          </div>

          {/* Subtle footnote */}
          <p className="mt-4 text-[11px] text-gray-500">
            You can change this later in Settings.
          </p>
        </div>
      </div>

      {/* Manager Login */}
      <div className="pb-6 text-center">
        <Link
          to="/manager-login"
          className="text-gray-500 text-xs md:text-sm font-medium hover:underline"
        >
          Manager Login
        </Link>
      </div>
    </div>
  );
}

export default Onboarding;
