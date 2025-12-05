"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Helper function to check if link is active
  const isActive = (path) => pathname === path;

  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="menu flex flex-wrap gap-8 text-lg flex-grow justify-center">
          <Link
            href="/advertiser-disclosure"
            className={isActive("/advertiser-disclosure") ? "font-bold text-[#2DAA9E]" : "font-medium text-gray-600 hover:text-[#2DAA9E]"}
          >
            Advertiser Disclosure
          </Link>

          <Link
            href="/privacy-policy"
            className={isActive("/privacy-policy") ? "font-bold text-[#2DAA9E]" : "font-medium text-gray-600 hover:text-[#2DAA9E]"}
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className={isActive("/terms") ? "font-bold text-[#2DAA9E]" : "font-medium text-gray-600 hover:text-[#2DAA9E]"}
          >
            Terms & Conditions
          </Link>

          <Link
            href="/contact"
            className={isActive("/contact") ? "font-bold text-[#2DAA9E]" : "font-medium text-gray-600 hover:text-[#2DAA9E]"}
          >
            Contact
          </Link>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Best Baby Gear. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
