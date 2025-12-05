import HomePage from '@/Components/home/HomePage';
import React from 'react' 
// src/app/page.js (server component)

// ✅ Metadata (server only)
export const metadata = {
  title: "Best Baby Gear 2025 | Top Baby Products for Infants & Parents",
  description:
    "Discover the best baby products of 2025 — baby carriers, monitors, swings, bassinets, and more. Safe, durable, and parent-approved essentials for newborns and infants.",
  keywords: [
    "baby products",
    "baby gear",
    "baby carriers",
    "baby monitors",
    "baby swings",
    "bassinets",
    "best baby products",
    "newborn essentials",
    "infant gear",
  ],
  alternates: { canonical: "https://bestbuyersview.com" },
  openGraph: {
    title: "Best Baby Gear 2025 | Top Baby Products for Infants & Parents",
    description:
      "Explore top-rated baby gear — carriers, monitors, swings, and bassinets for newborns and infants.",
    url: "https://bestbuyersview.com",
    siteName: "Best Buyers View",
    type: "website",
  },
  robots: { index: true, follow: true },
};
function Page() {
  return <HomePage />;
}

export default Page;

