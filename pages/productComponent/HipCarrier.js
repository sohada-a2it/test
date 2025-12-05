"use client"; 
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { MdDoNotDisturbAlt } from "react-icons/md"; 
function HipCarrier() {
  const [carriers, setCarriers] = useState([]);
  const [firstProduct, setFirstProduct] = useState(null);
  const [popupImage, setPopupImage] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [showCompareTable, setShowCompareTable] = useState(false);
  const [uncheckedItems, setUncheckedItems] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0); 
 

  const items = [
    { label: "Editor's Choice", value: "default" },
    { label: "Rating: High to Low", value: "rating-high" },
    { label: "Rating: Low to High", value: "rating-low" },
    { label: "Price: Low To High", value: "low-price" },
    { label: "Price: High To Low", value: "high-price" },
  ];

  const [selected, setSelected] = useState(items[0].label);
  const [sortType, setSortType] = useState("default");
  const [open, setOpen] = useState(false);

  // Load JSON
  useEffect(() => {
    fetch("/data/babyCarriers/hip_carrier.json")
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          const updatedData = data.map((item) => ({
            ...item,
            currentImage: item.images?.[0] || "",
          }));
          setCarriers(updatedData);
          setFirstProduct(updatedData[0] || null);
        }
      });
  }, []);

  // Popup logic
  useEffect(() => {
    if (count >= 3) return;

    let showTimeout, hideTimeout, nextTimeout;

    const popupSequence = () => {
      showTimeout = setTimeout(() => {
        setShow(true);

        hideTimeout = setTimeout(() => {
          setShow(false);
          setCount((prev) => prev + 1);
        }, 10000);
      }, 0);
    };

    if (count === 0) {
      nextTimeout = setTimeout(popupSequence, 5000);
    } else if (count === 1) {
      nextTimeout = setTimeout(popupSequence, 30000);
    } else if (count === 2) {
      nextTimeout = setTimeout(popupSequence, 40000);
    }

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, [count]);

  useEffect(() => {
    if (firstProduct?.currentImage) {
      setPopupImage(firstProduct.currentImage);
    }
  }, [firstProduct]);

  const updateImage = (index, newImage) => {
    setCarriers((prev) => {
      const updated = [...prev];
      if (updated[index]) {
        updated[index].currentImage = newImage;
      }
      return updated;
    });
  };

  const sortedCarriers = [...carriers].sort((a, b) => {
    if (sortType === "rating-high") return b.rating - a.rating;
    if (sortType === "rating-low") return a.rating - b.rating;
    if (sortType === "low-price") 
      return parseFloat(a.price?.replace('$','') || 0) - parseFloat(b.price?.replace('$','') || 0);
    if (sortType === "high-price") 
      return parseFloat(b.price?.replace('$','') || 0) - parseFloat(a.price?.replace('$','') || 0);
    return 0;
  });

  const closePopup = () => {
    setShow(false);
  };

  const handleCompareToggle = (product) => {
    const exists = compareList.some(p => p.id === product.id);

    if (exists) {
      const updated = compareList.filter(p => p.id !== product.id);
      setCompareList(updated);
      if (updated.length === 0) setCompareOpen(false);
      setUncheckedItems(prev => [...prev, product.id]);
    } else {
      if (compareList.length >= 4) return;
      setCompareList([...compareList, product]);
      setCompareOpen(true);
      setUncheckedItems(prev => prev.filter(id => id !== product.id));
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const pathname = usePathname();

  const links = [
    { name: "Baby Carrier Home", href: "/category/baby-carrier-page/baby-carriers-home" },
    { name: "Newborn Carrier", href: "/category/baby-carrier-page/newborn-carrier-page" },
    { name: "Baby Sling", href: "/category/baby-carrier-page/baby-sling-page" },
    { name: "Toddler Carrier", href: "/category/baby-carrier-page/toddler-carrier-page" },
    { name: "Hip Carrier", href: "/category/baby-carrier-page/hip-carrier-page" },
    { name: "Child Carrier Backpack", href: "/category/baby-carrier-page/child-carrier-backpack-page" },
    { name: "Hands-Free Baby Carrier", href: "/category/baby-carrier-page/hands-free-baby-carrier-page" },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Compare Tray */}
      {compareOpen && (
        <div className="fixed bottom-0 left-0 w-full bg-[#1f4f93] text-white py-2 shadow-xl z-50">
          <div className="mx-auto px-2 flex flex-row items-center justify-between gap-2">
            <div className="w-full p-2">
              <div className="grid grid-cols-4 gap-2 w-full">
                {[0, 1, 2, 3].map((slotIndex) => {
                  const item = compareList[slotIndex];

                  if (item) {
                    return (
                      <div
                        key={item.id}
                        className="bg-white text-black rounded-lg p-2 w-full h-20 sm:h-24 flex flex-col items-center justify-between shadow relative"
                      >
                        <img
                          src={item.images[0]}
                          alt={item.id}
                          className="h-14 w-full object-contain rounded-md"
                        />
                        <h3 className="font-semibold text-xs text-center w-full mt-1">
                          {item.title?.split(" ").slice(0, 5).join(" ") + "..."}
                        </h3>
                        <button
                          onClick={() => {
                            const updated = compareList.filter((p) => p.id !== item.id);
                            setCompareList(updated);
                            if (updated.length === 0) setCompareOpen(false);
                          }}
                          className="absolute top-1 right-1 text-lg font-bold text-black hover:text-gray-700"
                        >
                          ×
                        </button>
                      </div>
                    );
                  } else {
                    const placeholderText = ["Select 2nd", "Select 3rd", "Select 4th"][slotIndex - 1];
                    return (
                      <div
                        key={`p-${slotIndex}`}
                        className="border border-blue-300 border-dashed rounded-lg w-full h-20 sm:h-24 flex justify-center items-center"
                      >
                        <p className="text-white text-xs md:text-sm text-center">{placeholderText}</p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>

            <div className="flex items-center gap-2 w-auto">
              <button
                disabled={compareList.length < 2}
                onClick={() => {
                  if (compareList.length < 2) return;
                  setShowCompareTable(true);
                  setCompareOpen(false);
                }}
                className={`
                  text-white text-sm font-semibold px-3 py-1 rounded-lg shadow
                  ${compareList.length < 2 
                    ? "bg-gray-400 cursor-not-allowed " 
                    : "bg-red-500 hover:bg-[#2DAA9E] md:hover:bg-red-600"}
                `}
              >
                Compare
              </button>

              <button
                onClick={() => {
                  setCompareOpen(false);
                  const ids = compareList.map(item => item.id);
                  setUncheckedItems(ids);
                  setCompareList([]);
                }}
                className="text-white text-xl font-bold hover:text-gray-200"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {showCompareTable && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[999] p-4">
          <div className="bg-white p-2 rounded-xl shadow-xl w-full max-w-5xl relative overflow-hidden">
            {/* ✅ FIXED: Red Cross Button with correct position */}
            <button
              onClick={() => {
                setShowCompareTable(false);
                setCompareOpen(false);
                const ids = compareList.map(item => item.id);
                setUncheckedItems(ids);
                setCompareList([]);
              }}
              className="fixed top-4 right-4 bg-red-500 hover:bg-red-600 text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-[1000]"
            >
              ×
            </button>

            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-800 mb-6 relative">
              Compare Products
              <span className="block w-16 h-1 bg-[#66D2CE] rounded-full mx-auto mt-2"></span>
            </h2>

            <div className="overflow-y-auto max-h-[80vh] px-2">
              <table className="w-full table-auto border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-200 text-left sticky top-0 z-20">
                    <th className="border p-2">Feature</th>
                    {compareList.map((item) => (
                      <th key={item.id} className="border p-2">
                        <h2 className="text-sm sm:text-lg font-bold mt-1 sm:mt-2 truncate">
                          {item.title?.length > 50 ? item.title.substring(0, 20) + "..." : item.title}
                        </h2>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border p-2 font-semibold">Image</td>
                    {compareList.map((item) => (
                      <td key={item.id} className="border p-2">
                        <img
                          src={item.images?.[0]}
                          className="w-20 h-20 object-cover rounded mx-auto"
                          alt={item.title}
                        />
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="border p-2 font-semibold">Brand</td>
                    {compareList.map((item) => (
                      <td key={item.id} className="border p-2">{item.brand}</td>
                    ))}
                  </tr>

                  <tr>
                    <td className="border p-2 font-semibold">Rating</td>
                    {compareList.map((item) => (
                      <td key={item.id} className="border p-2">⭐ {item.rating}</td>
                    ))}
                  </tr>

                  {compareList[0]?.features?.map((feat, idx) => (
                    <tr key={idx}>
                      <td className="border p-2 font-semibold">{feat.label}</td>
                      {compareList.map((item) => (
                        <td key={item.id} className="border p-2">
                          {item.features?.[idx]?.value || "N/A"}
                        </td>
                      ))}
                    </tr>
                  ))}

                  <tr>
                    <td className="border p-2 font-semibold">Buy</td>
                    {compareList.map((item) => (
                      <td key={item.id} className="border p-2 text-center">
                        {item.checkPriceLink ? (
                          <a
                            href={item.checkPriceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-600 text-white px-4 py-1 rounded-lg shadow font-semibold inline-block"
                          >
                            Visit Amazon
                          </a>
                        ) : (
                          "N/A"
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* POPUP */}
      {show && firstProduct && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-3">
          {/* MOBILE POPUP */}
          <div className="p-1 w-full max-w-[350px] bg-white rounded-xl shadow-2xl flex flex-col items-center relative overflow-hidden md:hidden">
            <button
              onClick={(e) => { e.stopPropagation(); closePopup(); }}
              className="absolute top-1 right-1 w-10 h-10 flex items-center justify-center rounded-full bg-[#2DAA9E] text-white text-2xl font-bold hover:bg-[#66D2CE] transition-shadow shadow-md z-50"
            >
              ×
            </button>

            <div className="w-full h-40 sm:h-64 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={popupImage || firstProduct.images?.[0]}
                alt={firstProduct.title}
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>

            <div className="flex justify-center gap-2 mt-2 flex-wrap px-2">
              {firstProduct.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`w-12 h-12 rounded-md cursor-pointer border ${popupImage === img ? 'border-[#2DAA9E]' : 'border-gray-300'} hover:border-[#2DAA9E] hover:scale-105 transition-all object-contain`}
                  onClick={(e) => { e.stopPropagation(); setPopupImage(img); }}
                  alt={`Thumbnail ${i}`}
                />
              ))}
            </div>

            <div className="bg-white w-full mt-2 p-4 rounded-xl shadow-lg flex flex-col items-center">
              <div className="flex flex-col items-center text-center space-y-1 mb-4 w-full">
                <h1 className="text-sm font-semibold text-gray-800">{firstProduct.id}</h1>
                <h2 className="text-sm font-bold text-gray-900 leading-tight">
                  {firstProduct.title?.length > 50
                    ? firstProduct.title.substring(0, 30) + "..."
                    : firstProduct.title}
                </h2>
                <p className="text-[#2DAA9E] text-[12px]">⭐ {firstProduct.rating}</p>
                {firstProduct.monthly_purchases && (
                  <p className="text-[#2DAA9E] text-[12px]">{firstProduct.monthly_purchases} bought this month</p>
                )}
                <p className="text-gray-700 text-[12px] font-medium">Brand: {firstProduct.brand}</p>
              </div>

              <a
                href={firstProduct.checkPriceLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto w-[80%] sm:w-[60%] md:w-full flex flex-col items-center bg-yellow-500 text-white rounded-md text-[12px] md:text-sm font-semibold hover:bg-yellow-600 transition-all shadow-md cursor-pointer"
              >
                <span className="py-1 text-center w-full font-bold text-sm sm:text-base md:text-lg mt-1">
                  Check Price
                </span>
                <div className="w-full mt-1 border border-yellow-600 rounded-md py-1 bg-white flex justify-center items-center">
                  <img src="/images/amazon.png" className="w-10 sm:w-14 md:w-24 h-4 sm:h-6 md:h-7 object-contain" alt="Amazon" />
                </div>
              </a>
            </div>
          </div>

          {/* DESKTOP POPUP */}
          <div className="hidden md:flex w-full justify-center">
            <div className="bg-gradient-to-b from-[#2DAA9E] to-[#66D2CE] rounded-xl shadow-2xl cursor-pointer flex items-center md:flex-row flex-col md:w-auto md:max-w-none md:h-auto w-full max-w-[290px] h-auto relative overflow-visible"
              onClick={() => window.open(firstProduct.checkPriceLink, "_blank")}
            >
              <button
                onClick={(e) => { e.stopPropagation(); closePopup(); }}
                className="absolute -top-0 right-2 md:top-3 md:right-3 w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#2DAA9E] text-white text-lg md:text-2xl font-bold hover:bg-[#66D2CE] transition shadow-md z-50"
              >
                ×
              </button>

              <div className="w-full max-w-[280px] md:max-w-[260px] p-3 md:p-5 flex flex-col items-center text-white">
                <h1 className="text-sm md:text-xl font-semibold drop-shadow text-center">{firstProduct.id}</h1>
                <img src="/images/A2ITLogo.png" alt="logo" className="w-[180px] h-[100px] md:w-[250px] md:h-[140px] object-contain" />

                <div className="bg-white text-gray-800 w-full mt-2 p-3 md:p-4 rounded-lg shadow-lg">
                  <h1 className="text-xs md:text-lg mb-1 text-center font-bold leading-tight">
                    {firstProduct.title?.length > 50 ? firstProduct.title.substring(0, 40) + "..." : firstProduct.title}
                  </h1>
                  <p className="text-[#2DAA9E] font-medium text-[10px] md:text-sm mb-2 text-center">
                    Exclusive Savings
                  </p>
                  <a
                    href={firstProduct.checkPriceLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto w-[80%] sm:w-[60%] md:w-full flex flex-col items-center bg-yellow-500 text-white rounded-md text-[12px] md:text-sm font-semibold hover:bg-yellow-600 transition-all shadow-md cursor-pointer"
                  >
                    <span className="py-1 text-center w-full font-bold text-sm sm:text-base md:text-lg mt-1">
                      Check Price
                    </span>
                    <div className="w-full mt-1 border border-yellow-600 rounded-md py-1 bg-white flex justify-center items-center">
                      <img src="/images/amazon.png" className="w-10 sm:w-14 md:w-24 h-4 sm:h-6 md:h-7 object-contain" alt="Amazon" />
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white p-2 md:p-5 w-full md:w-auto">
                <p className="text-center text-[10px] md:text-sm text-gray-700 font-medium">Rating: ⭐ {firstProduct.rating}</p>
                {firstProduct.monthly_purchases && (
                  <p className="text-center text-[#2DAA9E] font-bold text-[9px] md:text-sm mt-1">
                    {firstProduct.monthly_purchases} bought this month
                  </p>
                )}
                <p className="text-center text-black font-bold text-[9px] md:text-sm mt-1 mb-2 md:mb-4">Brand: {firstProduct.brand}</p>

                <img src={popupImage || firstProduct.images?.[0]} className="w-full h-[110px] md:h-[300px] rounded-lg object-cover object-top shadow-md mb-2 md:mb-4" alt={firstProduct.title} />

                <div className="flex justify-center gap-2 md:gap-3">
                  {firstProduct.images?.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-9 h-9 md:w-14 md:h-14 rounded-md cursor-pointer border border-gray-300 hover:border-[#66D2CE] hover:scale-110 transition-all object-cover"
                      onMouseOver={(e) => { e.stopPropagation(); setPopupImage(img); }}
                      alt={`Thumbnail ${i}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MAIN PAGE CONTENT */}
      <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6">
        {/* LEFT SIDE */}
        <div className="flex-1">
          {/* SORT DROPDOWN */}
          <div className="w-full flex justify-center mt-6 px-4 sm:px-0">
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              <h1 className="text-lg font-semibold">Sort by:</h1>
              <div className="border-2 bg-white p-2 rounded-lg relative w-full sm:w-auto">
                <button
                  onClick={() => setOpen(!open)}
                  className="font-medium text-black w-full sm:w-auto text-left"
                >
                  {selected} ▾
                </button>
                {open && (
                  <div className="absolute left-0 top-full mt-2 w-full sm:w-64 bg-white border rounded-xl shadow-xl z-50">
                    {items.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelected(item.label);
                          setSortType(item.value);
                          setOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-[#7AE2CF]"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* PRODUCT LIST */}
          <div className="flex flex-col gap-4 mt-4">
            {sortedCarriers.map((item, index) => (
              <div key={index} className="w-full">
                <div className="w-full bg-gray-50 rounded-lg p-1 sm:p-2">
                  <div className="flex items-center flex-col md:flex-row gap-3 bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-2 sm:p-4 relative">
                    {/* BADGES */}
                    <div className="absolute top-0 right-0 flex flex-col md:flex-row gap-2">
                      {item.badge && (
                        <div className="bg-[#F05A7E] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                          {item.badges}
                        </div>
                      )}
                      {item.popular && (
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                          {item.populars}
                        </div>
                      )}
                      {item.value && (
                        <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                          {item.values}
                        </div>
                      )}
                    </div>

                    {/* LEFT IMAGE SECTION */}
                    <div className="w-full md:w-1/3 flex flex-col items-center p-1 sm:p-2">
                      <div className="w-full h-36 sm:h-52 flex items-start justify-center overflow-hidden rounded-md">
                        <img
                          src={item.currentImage}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex space-x-1 mt-2 flex-wrap justify-center">
                        {item.images?.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            className="w-7 h-7 sm:w-9 sm:h-9 rounded cursor-pointer hover:scale-110 transition object-contain"
                            onMouseEnter={() => updateImage(index, img)}
                            alt={`Thumbnail ${i}`}
                          />
                        ))}
                      </div>
                      <p className="mt-1 text-xs sm:text-sm font-semibold text-center">
                        Brand: <span className="text-gray-700">{item.brand}</span>
                      </p>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-full md:w-2/3 px-2 sm:px-4 py-1 sm:py-2 flex flex-col gap-1 sm:gap-2">
                      <h1 className="absolute top-0 left-1 bg-[#2DAA9E] text-white text-sm sm:text-base md:text-xl font-bold px-2 sm:px-4 py-1 rounded-full shadow">
                        {item.rank}
                      </h1>
                      <h2 className="text-sm sm:text-base md:text-xl font-bold mt-1 sm:mt-2">
                        {item.title?.length > 50 ? item.title.substring(0, 80) + "..." : item.title}
                      </h2>
                      <div className="flex items-center gap-1 text-yellow-600 mt-1 text-xs sm:text-sm md:text-lg">
                        <strong>Rating: {item.rating}</strong>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1 text-xs sm:text-sm md:text-base">
                        {item.features?.map((f, i) => (
                          <p key={i} className="flex items-center gap-1">
                            <span className="text-[#2DAA9E]">•</span>
                            <span className="font-semibold">{f.label}:</span>
                            {f.value}
                          </p>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-1 mt-1 text-xs sm:text-sm md:text-base">
                        <p className="font-bold underline">Available in:</p>
                        <p className="text-[#2DAA9E]">{item.available_colors} Colors</p>
                        {item.size && <p className="text-[#2DAA9E]">,{item.available_size} Size</p>}
                        {item.style && <p className="text-[#2DAA9E]">,{item.available_style} Style</p>}
                      </div>
                      <a target="_blank" href="/tushbayReview">
                        {item.review && (
                          <div className="text-[#2DAA9E] font-bold mt-1 text-xs sm:text-sm md:text-base">
                            {item.reviews}
                          </div>
                        )}
                      </a>
                    </div>

                    {/* PRICE + AMAZON + COMPARE */}
                    <div className="w-full md:w-1/4 flex flex-col items-center gap-1 sm:gap-2 mt-2 md:mt-0 text-lg">
                      {item.discount && (
                        <div className="mt-4 inline-block px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide uppercase bg-green-600 text-green-50">
                          {item.discounts}
                        </div>
                      )}

                      <a
                        href={item.checkPriceLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-auto w-[80%] sm:w-[60%] md:w-full flex flex-col items-center bg-yellow-500 text-white rounded-md text-[12px] md:text-sm font-semibold hover:bg-yellow-600 transition-all shadow-md cursor-pointer"
                      >
                        <span className="py-1 text-center w-full font-bold text-sm sm:text-base md:text-lg mt-1">
                          Check Price
                        </span>
                        <div className="w-full mt-1 border border-yellow-600 rounded-md py-1 bg-white flex justify-center items-center">
                          <img src="/images/amazon.png" className="w-10 sm:w-14 md:w-24 h-4 sm:h-6 md:h-7 object-contain" alt="Amazon" />
                        </div>
                      </a>

                      <div className="flex items-center mt-1" onClick={(e) => e.stopPropagation()}>
                        <div className="relative inline-block">
                          <div className="relative group">
                            <input
                              type="checkbox"
                              className={`w-4 h-4 sm:w-5 sm:h-5 cursor-pointer ${compareList.length >= 4 && !compareList.some(p => p.id === item.id) ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                              checked={compareList.some(p => p.id === item.id) && !uncheckedItems.includes(item.id)}
                              disabled={compareList.length >= 4 && !compareList.some((p) => p.id === item.id)}
                              onChange={() => handleCompareToggle(item)}
                            />
                            {compareList.length >= 4 && !compareList.some(p => p.id === item.id) && (
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-red-500 rounded-full w-full h-full flex items-center justify-center">
                                  <MdDoNotDisturbAlt className="text-white w-4 h-4" />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="font-bold ml-1 text-xs sm:text-sm">Compare</p>
                      </div>
                      {item.monthly_purchases && (
                        <div className="mt-4 inline-block bg-[#E6F7F6] text-black font-semibold text-sm sm:text-base px-3 py-2 rounded-lg shadow-sm">
                          {item.monthly_purchases} bought in the past month
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT Sidebar */}
        <div className="w-full md:w-[25%] flex flex-col gap-6 mt-3">
          <div className="flex flex-col bg-gray-50 shadow-lg rounded-lg py-2 px-2 mt-0 space-y-1 md:space-y-2 md:py-6 md:px-6 md:mt-6">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 m-0 p-0 mb-2 text-center">
              Related Categories
            </h1>
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm md:text-lg px-3 py-1 md:px-4 md:py-2 rounded-lg font-semibold transition-all duration-300 ${active
                      ? "bg-[#7AE2CF] text-black border-l-4 border-[#2DAA9E] shadow-sm"
                      : "text-black hover:text-[#2DAA9E] hover:bg-yellow-50"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* How We Rank Section */}
          <div className="hidden md:block bg-gray-50 py-6 px-6 shadow-lg mt-6 rounded-lg">
            <div className="max-w-screen-xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">How We Rank</h1>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Expert Analysis</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team of experts highlights useful information so you can easily compare products to find the one that's right for you.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Award-Winning Tech</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our technology analyzes thousands of purchase trends to bring you the top product recommendations.
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <img
                  src="/images/rank.jfif"
                  alt="How We Rank"
                  className="max-w-[50px] h-[50px] rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Why Trust Section */}
          <div className="bg-white p-6 shadow-xl rounded-lg max-w-4xl mx-auto mt-6 hidden md:block">
            <h1 className="text-xl font-semibold text-gray-800 mb-6">Why Trust Our Reviews?</h1>
            <p className="text-lg text-gray-600 mb-4">
              1,000,000+ shoppers use Buyer's Guide every week to find the best products and services online.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Learn more about{" "}
              <span className="text-blue-600 hover:text-blue-800">
                <a href="#">our rankings</a>
              </span>.
            </p>
            <div className="flex justify-center mt-6">
              <img
                src="/images/reviews.jfif"
                alt="Reviews"
                className="w-[50px] h-[50px] rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Reliable, Safe & Secure */}
          <div className="bg-white p-6 shadow-lg mt-6 hidden md:block">
            <div className="max-w-screen-xl mx-auto text-center flex flex-col md:flex-row items-center justify-center gap-6">
              <div>
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Reliable, Safe & Secure</h1>
                <p className="text-lg text-gray-600 mb-4">Helping millions of users make smarter purchases online.</p>
              </div>
              <div className=" ">
                <img
                  src="/images/safe1.png"
                  alt="Safe and Secure 1"
                  className="w-30 h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                />
                <img
                  src="/images/safe2.png"
                  alt="Safe and Secure 2"
                  className="w-30 h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Brands */}
      <div className="hidden md:block container mx-auto w-full mt-6 px-4 sm:px-10">
  <h2 className="text-center font-bold text-lg sm:text-xl text-[#2DAA9E] mb-6">
    We also considered 5 others:
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 p-10">
    {/* ITEM 1 */}
    <div className="text-center bg-white rounded-lg shadow-md p-2 sm:p-3 hover:shadow-xl transition">
      <img
        src="/images/momcozy.jfif"
        alt="Momcozy"
        className="mx-auto mb-2 rounded-lg h-16 sm:h-20 object-cover"
      />
      <p className="text-sm sm:text-base font-semibold">Momcozy Hip Seat</p>
      <p className="text-xs sm:text-sm text-gray-600">Baby Carrier</p>
    </div>

    {/* ITEM 2 */}
    <div className="text-center bg-white rounded-lg shadow-md p-2 sm:p-3 hover:shadow-xl transition">
      <img
        src="/images/tush.jfif"
        alt="Tush Baby"
        className="mx-auto mb-2 rounded-lg h-16 sm:h-20 object-cover"
      />
      <p className="text-sm sm:text-base font-semibold">Tush Baby Hip Seat</p>
      <p className="text-xs sm:text-sm text-gray-600">Baby Carrier</p>
    </div>

    {/* ITEM 3 */}
    <div className="text-center bg-white rounded-lg shadow-md p-2 sm:p-3 hover:shadow-xl transition">
      <img
        src="/images/hakai.png"
        alt="Hkai"
        className="mx-auto mb-2 rounded-lg h-16 sm:h-20 object-cover"
      />
      <p className="text-sm sm:text-base font-semibold">Hkai jp0981 Baby</p>
      <p className="text-xs sm:text-sm text-gray-600">Hip Carrier</p>
    </div>

    {/* ITEM 4 */}
    <div className="text-center bg-white rounded-lg shadow-md p-2 sm:p-3 hover:shadow-xl transition">
      <img
        src="/images/momcozy.jfif"
        alt="GRONSY"
        className="mx-auto mb-2 rounded-lg h-16 sm:h-20 object-cover"
      />
      <p className="text-sm sm:text-base font-semibold">GRONSY Baby Carrier</p>
      <p className="text-xs sm:text-sm text-gray-600">Newborn New Toddler</p>
    </div>

    {/* ITEM 5 */}
    <div className="text-center bg-white rounded-lg shadow-md p-2 sm:p-3 hover:shadow-xl transition">
      <img
        src="/images/momcozy.jfif"
        alt="Momcozy"
        className="mx-auto mb-2 rounded-lg h-16 sm:h-20 object-cover"
      />
      <p className="text-sm sm:text-base font-semibold">Momcozy Baby Carrier</p>
      <p className="text-xs sm:text-sm text-gray-600">Ergonomic Cozy</p>
    </div>
  </div>
</div>

      {/* Top Choice Section */}
<section>
  <div className="container mx-auto w-full mt-6 sm:px-0 lg:px-10 relative">
    <h1 className="text-center font-bold text-4xl">Our Top Choice</h1>
    
    {/* সরাসরি rank 1 প্রোডাক্ট খুঁজুন কোনো hook ছাড়া */}
    {(() => {
      // সরাসরি rank 1 প্রোডাক্ট খুঁজুন
      const topChoice = carriers.find(item => item.rank === 1);
      
      if (!topChoice) return null;
      
      // Static variable ব্যবহার করুন state-এর বদলে
      let topChoiceImage = topChoice.images?.[0] || "";
      
      // Event handler ফাংশন
      const handleThumbnailHover = (img) => {
        topChoiceImage = img;
        // DOM manually আপডেট করুন (recommended না, কিন্তু কাজ করবে)
        const mainImage = document.querySelector('.top-choice-main-image');
        if (mainImage) {
          mainImage.src = img;
        }
      };
      
      return (
        <div className="flex items-center gap-4 mt-4 py-10 lg:px-20 sm:px-2">
          <div className="w-full">
            <div className="w-full bg-gray-50 rounded-lg p-2 sm:p-4 shadow-md hover:shadow-xl transition-all cursor-pointer">
              <div className="flex flex-col md:flex-row gap-4 bg-white rounded-xl p-3 md:p-4 relative items-center">
                {/* BADGES */}
                <div className="absolute top-0 right-0 flex flex-col md:flex-row gap-2">
                  {topChoice.badge && (
                    <div className="bg-[#F05A7E] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                      {topChoice.badges}
                    </div>
                  )}
                  {topChoice.popular && (
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                      {topChoice.populars}
                    </div>
                  )}
                  {topChoice.value && (
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                      {topChoice.values}
                    </div>
                  )}
                </div>

                {/* LEFT IMAGE SECTION */}
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="w-full h-36 sm:h-52 flex items-center justify-center overflow-hidden rounded-md">
                    <img
                      src={topChoice.images?.[0] || ""}
                      alt={topChoice.title}
                      className="w-full h-full object-contain top-choice-main-image"
                      id="topChoiceMainImage"
                    />
                  </div>
                  <div className="flex space-x-1 mt-2 flex-wrap justify-center">
                    {topChoice.images?.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        className="w-7 h-7 sm:w-9 sm:h-9 rounded cursor-pointer hover:scale-110 transition object-contain"
                        onMouseEnter={() => {
                          const mainImage = document.getElementById('topChoiceMainImage');
                          if (mainImage) mainImage.src = img;
                        }}
                        alt={`Thumbnail ${i}`}
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center">
                    Brand: <span className="text-gray-700">{topChoice.brand}</span>
                  </p>
                </div>

                {/* MIDDLE CONTENT */}
                <div className="w-full md:w-2/3 flex flex-col gap-2 px-2 sm:px-4 py-1 sm:py-2"> 

                  <h2 className="text-sm sm:text-base md:text-xl font-bold mt-1 sm:mt-2">
                    {topChoice.title?.length > 50
                      ? topChoice.title.substring(0, 80) + "..."
                      : topChoice.title}
                  </h2>
                  
                  <div className="flex items-center gap-1 text-yellow-600 mt-1 text-xs sm:text-sm md:text-lg">
                    <strong>Rating: {topChoice.rating}</strong>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-1 text-xs sm:text-sm md:text-base">
                    {topChoice.features?.map((f, i) => (
                      <p key={i} className="flex items-center gap-1">
                        <span className="text-[#2DAA9E]">•</span>
                        <span className="font-semibold">{f.label}:</span>
                        {f.value}
                      </p>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-1 mt-1 text-xs sm:text-sm md:text-base">
                    <p className="font-bold underline">Available in:</p>
                    <p className="text-[#2DAA9E]">{topChoice.available_colors} Colors</p>
                    {topChoice.size && <p className="text-[#2DAA9E]">,{topChoice.available_size} Size</p>}
                    {topChoice.style && <p className="text-[#2DAA9E]">,{topChoice.available_style} Style</p>}
                  </div>
                  
                  <a target="_blank" href="/tushbayReview">
                    {topChoice.review && (
                      <div className="text-[#2DAA9E] font-bold mt-1 text-xs sm:text-sm md:text-base">
                        {topChoice.reviews}
                      </div>
                    )}
                  </a>
                </div>

                {/* RIGHT SECTION */}
                <div className="w-full md:w-1/4 flex flex-col items-center gap-2 mt-4 md:mt-0 text-lg">
                  {topChoice.discount && (
                    <div className="mt-4 inline-block px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide uppercase bg-green-600 text-green-50 shadow-md animate-pulse">
                      {topChoice.discounts}
                    </div>
                  )}
                  
                  <a
                    href={topChoice.checkPriceLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto w-[80%] sm:w-[60%] md:w-full flex flex-col items-center bg-yellow-500 text-white rounded-md text-[12px] md:text-sm font-semibold hover:bg-yellow-600 transition-all shadow-md cursor-pointer"
                  >
                    <span className="py-1 text-center w-full font-bold text-sm sm:text-base md:text-lg mt-1">
                      Check Price
                    </span>
                    <div className="w-full mt-1 border border-yellow-600 rounded-md py-1 bg-white flex justify-center items-center">
                      <img src="/images/amazon.png" className="w-10 sm:w-14 md:w-24 h-4 sm:h-6 md:h-7 object-contain" alt="Amazon" />
                    </div>
                  </a>
                  
                  {topChoice.monthly_purchases && (
                    <div className="mt-4 inline-block bg-[#E6F7F6] text-black font-semibold text-sm sm:text-base px-3 py-2 rounded-lg shadow-sm animate-pulse">
                      {topChoice.monthly_purchases} bought in past month
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })()}
  </div>
</section>
    </div>
  );
}

export default HipCarrier;