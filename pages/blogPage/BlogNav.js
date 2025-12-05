"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function BlogNav() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const links = [
    { label: "Baby Carriers", href: "/blog/baby-carriers" },
    { label: "Baby Monitors", href: "/blog/monitor" },
    { label: "Baby Swings", href: "/blog/swings" },
    { label: "Bassinets", href: "/blog/bassinets" },
    { label: "Car Seats", href: "/blog/car-seat" },
    { label: "Crib Mattresses", href: "/blog/crip-mattresses" },
    { label: "Cribs", href: "/blog/cribs" },
    { label: "High Chairs", href: "/blog/high-chair" },
    { label: "Stroller", href: "/blog/stroller" },
  ];

  // Find current page's category
  const currentCategory = links.find(link => pathname === link.href);

  // Button text: current page category or default
  const selectedText = currentCategory ? currentCategory.label : "Categories";

  // Click outside dropdown to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex justify-center mt-4 relative" ref={dropdownRef}>
      {/* Button shows the selected category */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-gradient-to-r from-[#66D2CE] to-[#2DAA9E] text-white px-5 py-3 rounded-lg shadow-md text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
      >
        {selectedText} ▾
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full mt-2 w-[90%] sm:w-[400px] bg-white shadow-xl rounded-lg transition-all duration-300 overflow-hidden z-50
        ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 text-gray-700">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setOpen(false)}
              className="bg-[#66D2CE] hover:bg-[#2DAA9E] text-white px-4 py-2 rounded-lg transition shadow"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
