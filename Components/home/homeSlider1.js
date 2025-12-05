"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow({ onClick }) {
  return (
    <div
      className="
        absolute 
        top-1/2 
        right-2 md:right-20  /* Mobile এ side gap ছোট */
        -translate-y-1/2 
        z-50 
        w-6 h-6 md:w-10 md:h-10  /* Mobile ছোট arrow */
        bg-yellow-500 
        rounded-full 
        flex items-center justify-center 
        cursor-pointer 
        shadow-lg 
        hover:bg-yellow-600 
        transition
      "
      onClick={onClick}
    >
      <svg
        className="w-3 h-3 md:w-5 md:h-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="
        absolute 
        top-1/2 
        left-2 md:left-20  /* Mobile এ side gap ছোট */
        -translate-y-1/2 
        z-50 
        w-6 h-6 md:w-10 md:h-10  /* Mobile ছোট arrow */
        bg-yellow-500 
        rounded-full 
        flex items-center justify-center 
        cursor-pointer 
        shadow-lg 
        hover:bg-yellow-600 
        transition
      "
      onClick={onClick}
    >
      <svg
        className="w-3 h-3 md:w-5 md:h-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}


export default function HomeSlider1() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div className="mt-10">
        <ul className="mb-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-yellow-500 transition"></div>
    ),
  };

  const slides = [
    { img: "/images/banner1.jpg", title: "", subtitle: "" },
    { img: "/images/banner2.jpg", title: "", subtitle: "" },
    { img: "/images/banner3.jpg", title: "", subtitle: "" },
  ];

  return (
    <div className="relative w-full z-40">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full">
            <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg mt-6">
              <img
                src={slide.img}
                alt={`Banner ${idx + 1}`}
                className="w-full h-full object-contain object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-md">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
