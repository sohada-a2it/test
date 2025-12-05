import LongRangeBabyMonitor from "@/pages/productComponent/LongRangeBabyMonitor";
import React from "react"; 

export const metadata = {
  title: "Best Long Range Baby Monitors 2025 | Extended Range & Signal Strength Reviewed",
  description:
    "Find the best long range baby monitors of 2025. Compare top long-distance baby monitors with extended signal range, stable connectivity, outdoor coverage, and night vision.",
  keywords: [
    "long range baby monitor",
    "best long distance baby monitor",
    "baby monitor with long range",
    "long range audio baby monitor",
    "long range video baby monitor",
    "extended range baby monitor",
    "baby monitor for large house",
    "baby monitor for long distance",
  ],
  alternates: {
    canonical: "https://bestbuyersview.com/best-long-range-baby-monitors",
  },
  openGraph: {
    title:
      "Best Long Range Baby Monitors 2025 | Extended Range, Strong Signal & Outdoor Coverage",
    description:
      "Explore top-rated long range baby monitors designed for large homes, outdoors, and multi-floor coverage with strong connectivity and HD video.",
    url: "https://bestbuyersview.com/best-long-range-baby-monitors",
    siteName: "Best Buyers View",
    type: "article",
    authors: ["Best Buyers View Editorial Team"], // ⭐ AUTHOR ADDED
  },
  authors: [
    {
      name: "Best Buyers View Editorial Team",
      url: "https://bestbuyersview.com",
    },
  ],
  publisher: {
    name: "Best Buyers View", // ⭐ PUBLISHER ADDED
    url: "https://bestbuyersview.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Long Range Baby Monitors 2025",
    description:
      "Compare long distance baby monitors with extended signal range, video clarity, and multi-floor connectivity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ⭐ PUBLISHER JSON-LD
function PublisherJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Best Buyers View",
    url: "https://bestbuyersview.com",
    logo: "https://bestbuyersview.com/logo.png",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ⭐ AUTHOR JSON-LD
function AuthorJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Best Buyers View Editorial Team",
    url: "https://bestbuyersview.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ⭐ ARTICLE SCHEMA (Long Range Baby Monitor)
function WebPageJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Long Range Baby Monitors 2025",
    description:
      "Explore the best long range baby monitors with strong signal, extended distance coverage, and stable connectivity.",
    articleSection: "Long Range Baby Monitors",
    author: {
      "@type": "Person",
      name: "Best Buyers View Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Best Buyers View",
      logo: {
        "@type": "ImageObject",
        url: "https://bestbuyersview.com/logo.png",
      },
    },
    mainEntityOfPage:
      "https://bestbuyersview.com/best-long-range-baby-monitors",
    url: "https://bestbuyersview.com/best-long-range-baby-monitors",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ⭐ BREADCRUMB JSON-LD
function BreadcrumbJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bestbuyersview.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Long Range Baby Monitors",
        item: "https://bestbuyersview.com/best-long-range-baby-monitors",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <PublisherJsonLD />
      <AuthorJsonLD />
      <WebPageJsonLD />
      <BreadcrumbJsonLD />

      {/* PAGE CONTENT */}
       <LongRangeBabyMonitor/>
    </>
  );
}
