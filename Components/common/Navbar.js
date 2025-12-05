"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa"; 

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(null); 
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const hoverTimeout = useRef(null);


  
  const isActive = (path) => {
    return pathname === path;
  };
  
  const handleMouseEnter = (menu) => {
    if (!dropdownClicked) {
      clearTimeout(hoverTimeout.current);
      setDropdownOpen(menu);
    }
  };
  
  const handleMouseLeave = () => {
    if (!dropdownClicked) {
      hoverTimeout.current = setTimeout(() => setDropdownOpen(null), 200);
    }
  }; 
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false); // scroll hole menu close
        setDropdownOpen(null);    // dropdown close
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);  // menu close
        setDropdownOpen(null);     // dropdown close
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const mobileMenuRef = useRef(null);
  useEffect(() => {
  // close menu automatically when route changes
  setMobileMenuOpen(false);
  setDropdownOpen(null);
}, [pathname]);
  const handleLinkClick = () => {
    setMobileMenuOpen(false); // close mobile menu
    setDropdownOpen(null);    // close dropdown if open
  };
  const categories = [
    { name: "Baby Carriers", href: "/category/baby-carrier-page/baby-carriers-home" },
    { name: "Baby Monitors", href: "/category/baby-monitor-page/baby-monitor-home" }, 
    { name: "Baby Swings", href: "/category/babySwingsPage/baby-swing-page" },
    { name: "Bassinets", href: "/category/bassinetPage/bassinets-home" },
    { name: "Car Seats", href: "/category/car-seat-page/car-seat-home" },
    { name: "Crib Mattresses", href: "/category/crib-mattresses-page/crib-mattresses-home" },
    { name: "Cribs", href: "/category/cribs-page/cribs-home" },
    { name: "High Chairs", href: "/category/high-chair-page/high-chair-home" },
    { name: "Strollers", href: "/category/stroller-page/stroller-home" },
  ];
  // const blogLinks = [
  //   { name: "Baby Carriers", href: "/blog/baby-carriers" },
  //   { name: "Baby Monitor", href: "/blog/monitor" },
  //   { name: "Swings", href: "/blog/swings" },
  //   { name: "car-seat", href: "/blog/Car Seat" },
  //   { name: "Bassinets", href: "/blog/bassinets" },
  //   { name: "Crip Mattresses", href: "/blog/crib-mattresses" },
  //   { name: "Cribs", href: "/blog/cribs" },
  //   { name: "High Chair", href: "/blog/high-chair" },
  //   { name: "Stroller", href: "/blog/stroller" }, 
// CATEGORY ACTIVE WHEN USER IS INSIDE ANY CATEGORY PAGE OR SUBPAGE
const isCategoryActive =
  categories.some(cat => pathname.startsWith(cat.href)) ||
  pathname.startsWith("/baby-carrier-page") ||
  pathname.startsWith("/babyMonitorPage") ||
  pathname.startsWith("/babySwingsPage") ||
  pathname.startsWith("/bassinetPage") ||
  pathname.startsWith("/car-seat-page") ||
  pathname.startsWith("/crib-mattresses-page") ||
  pathname.startsWith("/cribs-page") ||
  pathname.startsWith("/high-chair-page") ||
  pathname.startsWith("/stroller-page");
const isSingleCategoryActive = (href) => {
  return pathname === href || pathname.startsWith(href + "/");
};

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md" ref={mobileMenuRef} >
      <div className="container mx-auto flex items-center justify-between p-[10px]">

        {/* Logo */}
        <Link href="/">
          <img src="/images/A2ITLogo.png" alt="logo" className="w-[120px] h-[80px] object-fit" /> 
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          {/* Home */}
          <Link
            href="/"
            className={`${isActive("/") ? "font-bold text-[#2DAA9E]" : "font-medium text-gray-700 hover:text-[#2DAA9E]"} transition-colors duration-300`}
          >
            Home
          </Link>

          {/* Categories */}
             <div
      className="relative"
      onMouseEnter={() => handleMouseEnter("categories")}
      onMouseLeave={handleMouseLeave}
    >
      {/* ---------- BUTTON ---------- */}
      <button
        onClick={() => {
          setDropdownClicked(!dropdownClicked);
          setDropdownOpen(dropdownOpen === "categories" ? null : "categories");
        }}
        className={`transition-colors duration-300 font-medium
          ${
            isCategoryActive
              ? "text-[#2DAA9E] font-bold"
              : "text-gray-700 hover:text-[#2DAA9E]"
          }`}
      >
        Categories ▾
      </button>

      {/* ---------- DROPDOWN MENU ---------- */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[420px] 
          bg-white shadow-xl rounded-2xl overflow-hidden z-50 border border-gray-100
          transition-all duration-300
          ${
            dropdownOpen === "categories"
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-5 invisible"
          }`}
      >
        <div className="grid grid-cols-2 gap-3 p-5">

          {categories.map((cat) => {
           const active = isSingleCategoryActive(cat.href);


            return (
              <Link
                key={cat.name}
                href={cat.href}
                className={`
                  px-4 py-3 rounded-lg font-medium text-sm transition-all border
                  ${
                    active
                      ? "bg-[#2DAA9E] text-white border-[#2DAA9E] shadow-md"
                      : "bg-gray-100 text-gray-800 hover:bg-[#66D2CE] hover:text-white hover:shadow"
                  }`}
              >
                {cat.name}
              </Link>
            );
          })}

        </div>
      </div>
    </div>
    
          {/* Blog Dropdown */}
          {/* <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("blog")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => {
                setDropdownClicked(!dropdownClicked);
                setDropdownOpen(dropdownOpen === "blog" ? null : "blog");
              }}
              className="font-medium text-gray-700 hover:text-yellow-600 transition-colors duration-300"
            >
              Blog ▾
            </button>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[300px] bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 z-50
              ${dropdownOpen === "blog" ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"}`}
            >
              <div className="flex flex-col p-3 text-gray-800">
                {blogLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg mb-2 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div> */}
          <Link
            href="/blog"
            className={`${isActive("/blog") ? "font-bold text-[#2DAA9E]" : "font-medium text-gray-700 hover:text-[#2DAA9E]"} transition-colors duration-300`}
          >
           Blog
          </Link>
          {/* About */}
          <Link
            href="/about"
            className={`${isActive("/about") ? "font-bold text-[#2DAA9E]" : "font-medium text-gray-700 hover:text-[#2DAA9E]"} transition-colors duration-300`}
          >
            About Us
          </Link>

        </div>

        {/* Mobile Menu Toggle */}
 <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="font-medium text-gray-700 text-2xl"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white shadow-xl w-full z-50 absolute top-full left-0 rounded-b-2xl border-t border-gray-100"
        >
          <div className="flex flex-col gap-4 p-5">

            {/* Home */}
            <Link href="/" onClick={handleLinkClick} className="font-medium text-gray-700 hover:text-[#2DAA9E]">
              Home
            </Link>

            {/* Mobile Categories */}
            <div className="w-full">
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === "categoriesM" ? null : "categoriesM")
                }
                className="font-medium text-gray-700 hover:text-[#2DAA9E] flex justify-between items-center w-full py-2"
              >
                Categories
                <span className="text-lg">▾</span>
              </button>

              <div className={`transition-all overflow-hidden duration-300 ${dropdownOpen === "categoriesM" ? "max-h-96 mt-2" : "max-h-0"}`}>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      onClick={handleLinkClick} // auto hide
                      className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all
                        ${pathname.startsWith(cat.href)
                          ? "bg-[#2DAA9E] text-white border-[#2DAA9E] shadow-md"
                          : "bg-gray-100 text-gray-800 hover:bg-[#66D2CE] hover:text-white hover:shadow"
                        }`}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Links */}
            <Link href="/blog" onClick={handleLinkClick} className="font-medium text-gray-700 hover:text-[#2DAA9E]">
              Blog
            </Link>
            <Link href="/about" onClick={handleLinkClick} className="font-medium text-gray-700 hover:text-[#2DAA9E]">
              About Us
            </Link>

          </div>
        </div>
      )}
    </div>

        {/* Desktop Social Icons */}
<div className="hidden md:flex gap-5 mt-4 text-3xl text-gray-700">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <CiFacebook className="hover:text-[#2DAA9E] transition cursor-pointer" />
  </a>

  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <CiInstagram className="hover:text-[#2DAA9E] transition cursor-pointer" />
  </a>

  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <CiLinkedin className="hover:text-[#2DAA9E] transition cursor-pointer" />
  </a>

  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <CiTwitter className="hover:text-[#2DAA9E] transition cursor-pointer" />
  </a>

  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <CiYoutube className="hover:text-[#2DAA9E] transition cursor-pointer" />
  </a>
</div>


      </div>

      {/* Mobile MENU CONTENT */}
      {mobileMenuOpen && (
  <div className="md:hidden bg-white shadow-xl w-full z-50 absolute top-full left-0 rounded-b-2xl border-t border-gray-100">
    <div className="flex flex-col gap-4 p-5">

      {/* Home */}
      <Link
        href="/"
        className="font-medium text-gray-700 hover:text-[#2DAA9E] transition-colors duration-300"
      >
        Home
      </Link>

      {/* Mobile Categories */}
      <div className="w-full">
        <button
          onClick={() =>
            setDropdownOpen(dropdownOpen === "categoriesM" ? null : "categoriesM")
          }
          className="font-medium text-gray-700 hover:text-[#2DAA9E] transition-colors duration-300 flex justify-between items-center w-full py-2"
        >
          Categories
          <span className="text-lg">▾</span>
        </button>

        <div
          className={`transition-all overflow-hidden duration-300 ${
            dropdownOpen === "categoriesM" ? "max-h-96 mt-2" : "max-h-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => {
              const active = pathname.startsWith(cat.href);

              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${
                    active
                      ? "bg-[#2DAA9E] text-white border-[#2DAA9E] shadow-md"
                      : "bg-gray-100 text-gray-800 hover:bg-[#66D2CE] hover:text-white hover:shadow"
                  }`}
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Blog */}
      <Link
        href="/blog"
        className="font-medium text-gray-700 hover:text-[#2DAA9E] transition-colors duration-300"
      >
        Blog
      </Link>

      {/* About */}
      <Link
        href="/about"
        className="font-medium text-gray-700 hover:text-[#2DAA9E] transition-colors duration-300"
      >
        About Us
      </Link>

      {/* Social Icons */}
<div className="flex gap-5 mt-4 text-3xl text-gray-700">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <CiFacebook className="hover:text-[#2DAA9E] transition cursor-pointer" />
  </a>

  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <CiInstagram className="hover:text-[#2DAA9E] transition cursor-pointer" />
  </a>

  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <CiLinkedin className="hover:text-[#2DAA9E] transition cursor-pointer" />
  </a>

  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <CiTwitter className="hover:text-[#2DAA9E] transition cursor-pointer" />
  </a>

  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <CiYoutube className="hover:text-[#2DAA9E] transition cursor-pointer" />
  </a>
</div>

    </div>
  </div>
)}

    </nav>
  );
}
