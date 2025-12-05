"use client"
import React, { useEffect, useState } from "react";
import Banner from "@/Components/home/homeSlider1";
import Counter from "@/Components/home/homeCounter";
function HomePage() {
  const [carriers, setCarriers] = useState([]);
  const [firstProduct, setFirstProduct] = useState(null);
  const [popupImage, setPopupImage] = useState(null);
  const [carriers2, setCarriers2] = useState([]);
  const [firstProduct2, setFirstProduct2] = useState(null);
  const [popupImage2, setPopupImage2] = useState(null);
  const [carriers3, setCarriers3] = useState([]);
  const [firstProduct3, setFirstProduct3] = useState(null);
  const [popupImage3, setPopupImage3] = useState(null);
  const [carriers4, setCarriers4] = useState([]);
  const [firstProduct4, setFirstProduct4] = useState(null);
  const [popupImage4, setPopupImage4] = useState(null);
  const [loading, setLoading] = useState(true);
  // baby carrier
  useEffect(() => {
    fetch("/data/babyCarriers/baby_carriers.json")
      .then((res) => res.json())
      .then((data) => {
        const updatedData = data.map((item) => ({
          ...item,
          currentImage: item?.images[0],
        }));
        setCarriers(updatedData);
        setFirstProduct(updatedData[0]);
      });
  }, []);
  useEffect(() => {
    if (firstProduct) {
      setPopupImage(firstProduct.currentImage);
    }
  }, [firstProduct]);

  const updateImage = (index, newImage) => {
    setCarriers((prev) => {
      const updated = [...prev];
      updated[index].currentImage = newImage;
      return updated;
    });
  };

  // baby monitor
  useEffect(() => {
    fetch("/data/BabyMonitor/baby_monitor.json")
      .then((res) => res.json())
      .then((data) => {
        const updatedData = data.map((item) => ({
          ...item,
          currentImage: item.images[0],
        }));
        setCarriers2(updatedData);
        setFirstProduct2(updatedData[0]);
      });
  }, []);
  useEffect(() => {
    if (firstProduct2) {
      setPopupImage2(firstProduct2.currentImage);
    }
  }, [firstProduct2]);

  const updateImage2 = (index, newImage) => {
    setCarriers2((prev) => {
      const updated = [...prev];
      updated[index].currentImage = newImage;
      return updated;
    });
  };
  // baby swing
  useEffect(() => {
    fetch("/data/babySwings/baby_swings_home.json")
      .then((res) => res.json())
      .then((data) => {
        const updatedData = data.map((item) => ({
          ...item,
          currentImage: item.images[0],
        }));
        setCarriers3(updatedData);
        setFirstProduct3(updatedData[0]);
      });
  }, []);
  useEffect(() => {
    if (firstProduct3) {
      setPopupImage3(firstProduct3.currentImage);
    }
  }, [firstProduct3]);

  const updateImage3 = (index, newImage) => {
    setCarriers3((prev) => {
      const updated = [...prev];
      updated[index].currentImage = newImage;
      return updated;
    });
  };
  // bassinet
  useEffect(() => {
    fetch("/data/bassinets/bassinet_home.json")
      .then((res) => res.json())
      .then((data) => {
        const updatedData = data.map((item) => ({
          ...item,
          currentImage: item.images[0],
        }));
        setCarriers4(updatedData);
        setFirstProduct4(updatedData[0]);
      });
  }, []);
  useEffect(() => {
    if (firstProduct4) {
      setPopupImage4(firstProduct4.currentImage);
    }
  }, [firstProduct4]);

  const updateImage4 = (index, newImage) => {
    setCarriers4((prev) => {
      const updated = [...prev];
      updated[index].currentImage = newImage;
      return updated;
    });
  };
  useEffect(() => {
    // page load complete হলে loading false করে দাও
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }
  return (
    <div className="w-full">
      {/* Banner Section */}
      <section>
        <div className="container mx-auto">
          <Banner />
        </div>
      </section>

      {/* Age Cards Section */}
      {/* <section>
        <div className="flex flex-col md:flex-row justify-center items-center py-16 gap-6 container mx-auto">
          {["2-3 Months", "4-6 Months", "7-9 Months"].map((age, idx) => (
            <div
              key={idx}
              className="relative w-full max-w-sm group rounded-lg overflow-hidden shadow-lg transition-all duration-500"
            >
              <img
                src="/images/shape.png"
                alt={`Age ${age}`}
                className="w-full h-64 sm:h-72 md:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2 px-4 py-2">
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-wide transform transition-all duration-500 group-hover:scale-110 group-hover:text-gray-200">
                    {age}
                  </h1>
                  <h2 className="text-lg sm:text-xl font-semibold opacity-80 group-hover:opacity-100">
                    Car Seats
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      {/* Top Selling Products */}
      <section>
        <div className="container mx-auto py-16 px-6">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
              Top Selling Products
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">
              Explore our most popular baby essentials loved by parents worldwide
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {firstProduct && (
              <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4">

                {/* Product Title */}
                <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  {firstProduct.id}
                </h2>

                {/* Main Image */}
                <div className="w-full flex justify-center">
                  <img
                    src={popupImage}
                    alt={firstProduct.id}
                    className="w-full h-48 md:h-56 object-contain rounded-lg shadow-sm"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex justify-center gap-2 mt-3 flex-wrap">
                  {firstProduct.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg cursor-pointer border border-gray-300 hover:border-yellow-500 hover:scale-110 transition-all"
                      onMouseEnter={() => setPopupImage(img)}
                    />
                  ))}
                </div>

                {/* View Details Button */}
                <div className="mt-4 flex justify-center">
                  <button
                    className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg w-full hover:bg-yellow-600 transition shadow-md"
                    onClick={() => window.open(firstProduct.checkPriceLink, "_blank")}
                  >
                    View Details
                  </button>
                </div>

              </div>
            )}
            {/* baby monitor */}
            {firstProduct2 && (
              <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4">

                {/* Product Title */}
                <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  {firstProduct2.id}
                </h2>

                {/* Main Image */}
                <div className="w-full flex justify-center">
                  <img
                    src={popupImage2}
                    alt={firstProduct2.id}
                    className="w-full h-48 md:h-56 object-contain rounded-lg shadow-sm"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex justify-center gap-2 mt-3 flex-wrap">
                  {firstProduct2.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg cursor-pointer border border-gray-300 hover:border-yellow-500 hover:scale-110 transition-all"
                      onMouseEnter={() => setPopupImage2(img)}
                    />
                  ))}
                </div>

                {/* View Details Button */}
                <div className="mt-4 flex justify-center">
                  <button
                    className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg w-full hover:bg-yellow-600 transition shadow-md"
                    onClick={() => window.open(firstProduct2.checkPriceLink, "_blank")}
                  >
                    View Details
                  </button>
                </div>

              </div>
            )}
            {/* baby swing */}
            {firstProduct3 && (
              <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4">

                {/* Product Title */}
                <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  {firstProduct3.id}
                </h2>

                {/* Main Image */}
                <div className="w-full flex justify-center">
                  <img
                    src={popupImage3}
                    alt={firstProduct3.id}
                    className="w-full h-48 md:h-56 object-contain rounded-lg shadow-sm"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex justify-center gap-2 mt-3 flex-wrap">
                  {firstProduct3.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg cursor-pointer border border-gray-300 hover:border-yellow-500 hover:scale-110 transition-all"
                      onMouseEnter={() => setPopupImage3(img)}
                    />
                  ))}
                </div>

                {/* View Details Button */}
                <div className="mt-4 flex justify-center">
                  <button
                    className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg w-full hover:bg-yellow-600 transition shadow-md"
                    onClick={() => window.open(firstProduct3.checkPriceLink, "_blank")}
                  >
                    View Details
                  </button>
                </div>

              </div>
            )}
            {/* bassinet */}
            {firstProduct4 && (
              <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4">

                {/* Product Title */}
                <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  {firstProduct4.id}
                </h2>

                {/* Main Image */}
                <div className="w-full flex justify-center">
                  <img
                    src={popupImage4}
                    alt={firstProduct4.id}
                    className="w-full h-48 md:h-56 object-contain rounded-lg shadow-sm"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex justify-center gap-2 mt-3 flex-wrap">
                  {firstProduct4.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg cursor-pointer border border-gray-300 hover:border-yellow-500 hover:scale-110 transition-all"
                      onMouseEnter={() => setPopupImage4(img)}
                    />
                  ))}
                </div>

                {/* View Details Button */}
                <div className="mt-4 flex justify-center">
                  <button
                    className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg w-full hover:bg-yellow-600 transition shadow-md"
                    onClick={() => window.open(firstProduct4.checkPriceLink, "_blank")}
                  >
                    View Details
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>
      </section>
      {/* Special Offer Section */}
      <section>
        <div className="relative w-full">
          <img
            src="/images/counter.jpg"
            alt="Special Offer"
            className="w-full h-80 sm:h-96 md:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <Counter />
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 mb-6">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
