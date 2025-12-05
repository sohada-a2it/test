"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // All link click detection
    const handleClick = (e) => {
      const link = e.target.closest("a"); // any <a> tag
      if (link && link.href.startsWith(window.location.origin)) {
        setIsLoading(true);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    // When route changes → stop loading
    setIsLoading(false);
  }, [pathname]); // ✅ pathname change হলে loading stop হবে

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/10">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
}