"use client";
import React, { useEffect, useState } from 'react'
import blogNav from "@/pages/blogPage/BlogNav";
function blogHome() {
  const [loading, setLoading] = useState(true);
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
    <div className="container mx-auto mt-2">
      {/* Wrapper */}
      <div className="flex flex-col items-center gap-10">

        {/* --- Top Posts Section --- */}
        <div className="w-full gap-3 bg-gray-50 p-4 rounded-xl ">
          <div className="w-full bg-gray-50 py-12">
            <div className="container mx-auto px-4">

              <h2 className="text-3xl font-bold text-center mb-8">
                Explore Baby Categories Blog
              </h2>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* CARD TEMPLATE */}
                {[
                  {
                    name: "Baby Carrier",
                    img: "/images/pro1.jpg",
                    link: "blog/baby-carriers"
                  },
                  {
                    name: "Bassinet",
                    img: "/images/basshome1.1.jpg",
                    link: "blog/bassinets"
                  },
                  {
                    name: "Crib",
                    img: "/images/Cribs home1.1.jpg",
                    link: "blog/cribs"
                  },
                  {
                    name: "Crib Mattresses",
                    img: "/images/crib-mattreess.jpg",
                    link: "blog/crip-mattresses"
                  },
                  {
                    name: "High Chair",
                    img: "/images/baby-high-chair1.1.jpg",
                    link: "blog/high-chair"
                  },
                  {
                    name: "Stroller",
                    img: "/images/strollerhome1.1.jpg",
                    link: "blog/stroller"
                  },
                  {
                    name: "Baby Swings",
                    img: "/images/bshome1.1.jpg",
                    link: "blog/swings"
                  },
                  {
                    name: "Baby Monitor",
                    img: "/images/bhome1.1.jpg",
                    link: "blog/monitor"
                  },
                  {
                    name: "Baby Car Seat",
                    img: "/images/car1.1.jpg",
                    link: "blog/car-seat"
                  },
                ]
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-3 flex flex-col items-center text-center"
                    >
                      <div className="w-full h-32 mb-3 rounded-lg overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <h3 className="text-sm font-semibold">{item.name}</h3>

                      <p className="text-gray-600 text-xs mt-1">
                        Explore the best {item.name.toLowerCase()} options for your baby.
                      </p>

                      <a
                        href={item.link}
                        target="_blank"
                        className="mt-2 bg-[#2DAA9E] hover:bg-yellow-600 text-white px-2 py-1 rounded-lg text-xs font-medium transition"
                      >
                        Explore
                      </a>
                    </div>

                  ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default blogHome
