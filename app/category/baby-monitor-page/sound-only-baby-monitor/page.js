import SoundOnlyBabyMonitor from "@/pages/productComponent/SoundOnlyBabyMonitor";
import React from "react"; 

export const metadata = {
  title: "Best Sound-Only Baby Monitors 2025 | Audio Baby Monitor Reviews & Safety",
  description:
    "Discover the best sound-only baby monitors of 2025. Reliable audio monitoring with long range, clear sound, no WiFi required, and simple operation for parents.",
  keywords: [
    "sound only baby monitor",
    "audio baby monitor",
    "non wifi sound baby monitor",
    "best audio baby monitor",
    "cheap sound baby monitor",
    "sound baby monitor long range",
    "audio only baby monitor 2025",
  ],
  alternates: {
    canonical: "https://bestbuyersview.com/best-sound-only-baby-monitors",
  },
  openGraph: {
    title:
      "Best Sound-Only Baby Monitors 2025 | Clear Audio, Long Range & Safe Monitoring",
    description:
      "Explore top sound-only baby monitors with crystal-clear audio, long-distance range, and secure non-WiFi monitoring.",
    url: "https://bestbuyersview.com/best-sound-only-baby-monitors",
    siteName: "Best Buyers View",
    type: "article",
    authors: ["Best Buyers View Editorial Team"], // ⭐ AUTHOR INCLUDED
  },
  authors: [
    {
      name: "Best Buyers View Editorial Team",
      url: "https://bestbuyersview.com",
    },
  ],
  publisher: {
    name: "Best Buyers View", // ⭐ PUBLISHER INCLUDED
    url: "https://bestbuyersview.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sound-Only Baby Monitors 2025",
    description:
      "Compare top-rated audio baby monitors with long range, clear sound quality, and safe non-WiFi operation.",
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

// ⭐ ARTICLE SCHEMA (Sound-Only Baby Monitor)
function WebPageJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Sound-Only Baby Monitors 2025",
    description:
      "Explore the best sound-only baby monitors with clear audio, long-distance range, and safe non-WiFi monitoring.",
    articleSection: "Sound-Only Baby Monitors",
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
      "https://bestbuyersview.com/best-sound-only-baby-monitors",
    url: "https://bestbuyersview.com/best-sound-only-baby-monitors",
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
        name: "Sound-Only Baby Monitors",
        item: "https://bestbuyersview.com/best-sound-only-baby-monitors",
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
      <SoundOnlyBabyMonitor/>
    </>
  );
}
