import { useParams, Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState, useMemo } from "react";
import { BiPlus } from "react-icons/bi";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { IoMdArrowBack } from "react-icons/io";
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";
import { FiPackage, FiSearch } from "react-icons/fi";
import { MdOutlineSort } from "react-icons/md";
import { GoPackage } from "react-icons/go";
import { TfiPackage } from "react-icons/tfi";

function Vendor() {
  const { products, vendors } = useAuthContext();
  const { packs, addPack, addToCart } = useCartContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("popular"); // popular | price-asc | price-desc
  const [fav, setFav] = useState(false);
  const vendor = vendors?.find((v) => v._id === id);
  const [selectedPack, setSelectedPack] = useState(packs[0]?.id || "");
  const [adding, setAdding] = useState({}); // per-product add spinner
  const formattedProducts = (products || []).map((p) => ({
    id: p._id,
    vendorId: p.vendorId,
    name: p.title,
    price: p.price,
    category: p.category,
    available: p.available,
    image: p.image,
    inStock: p.stock === "in",
    vendorName: vendor?.storeName || "", // prevent null
  }));

  const categories = [
    "All",
    "Protein",
    "Carbohydrate",
    "Drinks",
    "Pastries",
    "Packs",
  ];

  const filteredProducts = useMemo(() => {
    let list = formattedProducts.filter((p) => {
      return (
        String(p.vendorId).trim() === String(id).trim() &&
        (selectedCategory === "All" || p.category === selectedCategory)
      );
    });
    if (query?.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((p) => p.name?.toLowerCase()?.includes(q));
    }
    if (sort === "price-asc") list = list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = list.sort((a, b) => b.price - a.price);
    // popular: keep original order for now
    return list;
  }, [formattedProducts, id, selectedCategory, query, sort]);

  const handleAddPack = () => {
    const newPack = addPack(); // calls your context to add a new pack
    setSelectedPack(newPack.id); // automatically switch to it
    toast.success(`New pack "${newPack.name}" created`);
  };
  const handleAddToPack = (product) => {
    setAdding((prev) => ({ ...prev, [product.id]: true }));
    const currentPack = packs.find((p) => p.id === selectedPack);

    if (!currentPack) {
      setAdding((prev) => ({ ...prev, [product.id]: false }));
      toast.error("Please select or create a pack first");
      return;
    }

    // Store online check
    const isOnline = String(vendor?.Active).toLowerCase() === "true";
    if (!isOnline) {
      setAdding((prev) => ({ ...prev, [product.id]: false }));
      toast.error("This store is offline. You can't add items right now.");
      return;
    }

    // ✅ If pack has no vendor yet, assign it
    if (!currentPack.vendorName) {
      currentPack.vendorName = product.vendorName;
      currentPack.vendorId = product.vendorId;
    }

    // ✅ Prevent mixing vendors
    if (currentPack.vendorName !== product.vendorName) {
      setAdding((prev) => ({ ...prev, [product.id]: false }));
      toast.error(
        `You can only add items from ${currentPack.vendorName} to this pack.`
      );
      return;
    }

    // ✅ Prevent duplicates
    const alreadyInPack = currentPack.items.some(
      (item) => item.id === product.id
    );
    if (alreadyInPack) {
      setAdding((prev) => ({ ...prev, [product.id]: false }));
      toast.error(`${product.name} is already in this pack.`);
      return;
    }

    // ✅ Make sure the product added carries vendorName and vendorId
    const productWithVendor = {
      ...product,
      vendorName: product.vendorName,
      vendorId: product.vendorId,
      quantity: 1,
    };

    try {
      addToCart(productWithVendor, selectedPack);
      toast.success(`${product.name} added to ${currentPack.name}`);
    } finally {
      setTimeout(() => {
        setAdding((prev) => ({ ...prev, [product.id]: false }));
      }, 300);
    }
  };

  const currentPack = packs.find((p) => p.id === selectedPack);
  // const inCart = currentPack?.items.some(
  //   (item) => item.id === vendorProducts.id
  // );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-28">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-gradient-to-br from-rose-500/15 to-orange-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/15 to-blue-400/15 blur-3xl" />

      {/* Vendor Banner */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={
            vendor?.banner ||
            "https://images.unsplash.com/photo-1528952686551-542043782ab9?auto=format&fit=crop&w=1400&q=60"
          }
          alt="Vendor Banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 top-3 flex items-center justify-between px-4 text-white">
          <button
            onClick={() => navigate(-1)}
            className="rounded-md bg-white/10 p-2 backdrop-blur hover:bg-white/20"
            aria-label="Go back"
          >
            <IoMdArrowBack />
          </button>
          <button
            onClick={() => setFav((v) => !v)}
            className={`rounded-md p-2 backdrop-blur transition ${
              fav ? "bg-rose-500/80" : "bg-white/10 hover:bg-white/20"
            }`}
            aria-label="Toggle favorite"
          >
            {fav ? (
              <FaHeart className="text-white" />
            ) : (
              <FaRegHeart className="text-white" />
            )}
          </button>
        </div>
        <div className="absolute bottom-5 left-0 right-0 px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/10 p-3 backdrop-blur">
            <div className="flex items-center justify-between gap-3 text-white">
              <div>
                <h1 className="text-2xl font-[800] tracking-tight">
                  {vendor?.storeName || "Vendor"}
                </h1>
                <div className="mt-1 flex items-center gap-2 text-[12px] text-white/90">
                  <FaStar className="text-yellow-300" />
                  <span>{Number(vendor?.rating || 4.7).toFixed(1)}</span>
                  <span>•</span>
                  <span>{vendor?.time || "25–35 min"}</span>
                </div>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-semibold text-white ${
                  String(vendor?.Active).toLowerCase() === "true"
                    ? "bg-emerald-500/90"
                    : "bg-gray-500/90"
                }`}
              >
                {String(vendor?.Active).toLowerCase() === "true"
                  ? "Online"
                  : "Offline"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="sticky top-0 z-10 -mt-3 bg-gradient-to-b from-white to-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
          <div className="relative flex-1">
            <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search menu..."
              className="w-full placeholder:text-xs rounded-xl border border-gray-200 pl-9 pr-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose-500/20"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm">
              <MdOutlineSort className="text-gray-500" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent placeholder:text-xs text-xs outline-none"
              >
                <option className="text-xs " value="popular">
                  Popular
                </option>
                <option className="text-xs " value="price-asc">
                  Price: Low → High
                </option>
                <option className="text-xs " value="price-desc">
                  Price: High → Low
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Nav */}
        <nav className="no-scrollbar overflow-x-auto px-4 pb-3">
          <ul className="flex gap-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`px-3 py-1.5 rounded-xl text-[13px] font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-gray-900 text-white shadow-sm"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-[var(--default)] hover:text-[var(--default)]"
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Pack selector */}
      {packs.length > 0 && (
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
          <div className="inline-flex items-center w-[100%] gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm">
            <TfiPackage className="text-gray-500" />
            <select
              value={selectedPack || ""}
              onChange={(e) => setSelectedPack(Number(e.target.value))}
              className="bg-transparent text-[9px] outline-none"
            >
              {packs.map((pack) => (
                <option className="text-[9px]" key={pack.id} value={pack.id}>
                  {pack.name} ({pack.items.length}{" "}
                  {pack.items.length === 1 ? "item" : "items"})
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleAddPack}
            className="text-[12px] inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#9e0505] to-[#c91a1a] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-lg"
          >
            <BiPlus size={18} />
            <span>Add Pack</span>
          </button>
        </div>
      )}

      {/* Offline banner */}
      {String(vendor?.Active).toLowerCase() !== "true" && (
        <div className="mx-auto max-w-5xl px-4 mt-4">
          <div className="rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-[13px] font-[400]">
            This store is currently offline. Browsing is allowed, but ordering
            is disabled.
          </div>
        </div>
      )}
      {/* Product Grid */}
      <main className="mx-auto mt-4 grid max-w-5xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full h-[50vh] flex flex-col items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              No Products
            </h3>
            <p className="text-center text-gray-500">
              No products available in this category.
            </p>
          </div>
        ) : (
          filteredProducts.map((product) => {
            const currentPack = packs.find((p) => p.id === selectedPack);
            const inCart = currentPack?.items.some(
              (item) => item.id === product.id
            );

            return (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative w-full overflow-hidden aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* Price chip */}
                  <span className="absolute top-3 left-3 rounded-xl px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-gray-900 to-gray-700/90 shadow-md">
                    ₦{product.price.toLocaleString()}
                  </span>
                  <span
                    className={`absolute top-3 right-3 rounded-xl px-3 py-1.5 text-xs font-semibold shadow-md ${
                      product.available === true
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                        : "bg-gradient-to-r from-red-500 to-rose-500 text-white"
                    }`}
                  >
                    {product.available === true ? "In Stock" : "Out of Stock"}
                  </span>

                  {/* Quick actions overlay */}
                  <div className="absolute inset-x-2 bottom-2 flex translate-y-3 items-center justify-between gap-2 rounded-xl bg-white/90 p-2 opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Link
                      to={`/meals/${product.id}`}
                      className="flex-1 rounded-lg border border-gray-200 px-3 py-1.5 text-center text-[12px] font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      View
                    </Link>
                    <button
                      disabled={
                        !product.available ||
                        String(vendor?.Active).toLowerCase() !== "true"
                      }
                      onClick={() => handleAddToPack(product)}
                      className={`flex-1 rounded-lg px-3 py-1.5 text-[12px] font-semibold transition flex items-center justify-center gap-2 ${
                        product.available &&
                        String(vendor?.Active).toLowerCase() === "true"
                          ? "bg-gray-900 text-white hover:opacity-90"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {String(vendor?.Active).toLowerCase() !== "true" ? (
                        "Offline"
                      ) : adding[product.id] ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                          </svg>
                          <span>Adding</span>
                        </>
                      ) : (
                        "Add"
                      )}
                    </button>
                  </div>
                  {!product.available && (
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
                  )}
                </div>

                <div className="p-3">
                  <p className="mb-1 text-[11px] font-[300] text-gray-500">
                    {product.category}
                  </p>
                  <h3 className="mb-2 line-clamp-2 text-[13px] font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-bold text-[var(--default)]">
                      ₦{product.price.toLocaleString()}
                    </span>
                    {inCart && (
                      <span className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-700">
                        <FiPackage /> In Pack
                      </span>
                    )}
                  </div>

                  <button
                    disabled={
                      !product.available ||
                      String(vendor?.Active).toLowerCase() !== "true"
                    }
                    onClick={() => handleAddToPack(product)}
                    className={`w-full rounded-[10px] py-2 text-[12px] font-semibold transition-all flex items-center justify-center gap-2 ${
                      inCart
                        ? "bg-gray-100 text-gray-600 border border-gray-200"
                        : product.available &&
                          String(vendor?.Active).toLowerCase() === "true"
                        ? "bg-gradient-to-r from-[#9e0505] to-[#c91a1a] text-white hover:shadow-lg active:scale-[0.99]"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {inCart ? (
                      <span className="flex items-center gap-1">
                        {" "}
                        <div>
                          {" "}
                          <FiPackage />
                        </div>
                        In Pack
                      </span>
                    ) : product.available &&
                      String(vendor?.Active).toLowerCase() === "true" ? (
                      adding[product.id] ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                          </svg>
                          <span>Adding...</span>
                        </>
                      ) : (
                        "Add to Pack"
                      )
                    ) : String(vendor?.Active).toLowerCase() !== "true" ? (
                      "Store Offline"
                    ) : (
                      "Out of Stock"
                    )}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </main>
      {/* Sticky pack summary bar */}
      {currentPack && (
        <div className="fixed inset-x-0 bottom-0 z-20 mx-auto mb-3 max-w-5xl px-4">
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white/95 p-3 shadow-xl backdrop-blur">
            <div className="flex min-w-0 items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 text-white">
                <GoPackage />
              </div>
              <div className="min-w-0">
                <p className="truncate text-[12px] text-gray-500">
                  Current Pack
                </p>
                <p className="truncate text-sm font-[800] text-gray-900">
                  {currentPack.name} · {currentPack.items.length}{" "}
                  {currentPack.items.length === 1 ? "item" : "items"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/cart")}
                className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Review Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Vendor;
