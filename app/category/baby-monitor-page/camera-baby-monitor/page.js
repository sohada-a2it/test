import CameraBabyMonitor from "@/pages/productComponent/CameraBabyMonitor";
import React from "react";  

export const metadata = {
  title:
    "Best Camera Baby Monitors 2025 | WiFi & Non-WiFi Video Baby Monitor Reviews",
  description:
    "Discover the best camera baby monitors of 2025. Compare top HD video baby monitors, WiFi and non-WiFi options, night vision, motion alerts, two-way audio, and more.",
  keywords: [
    "best camera baby monitor",
    "video baby monitor",
    "wifi camera baby monitor",
    "non wifi camera baby monitor",
    "hd baby monitor",
    "camera baby monitor with night vision",
    "best video baby monitors 2025",
  ],
  alternates: {
    canonical: "https://bestbuyersview.com/best-camera-baby-monitors",
  },
  openGraph: {
    title:
      "Best Camera Baby Monitors 2025 | HD Video, WiFi, Night Vision & Safety Reviews",
    description:
      "Explore top-rated camera baby monitors of 2025 with HD video clarity, safety features, WiFi & non-WiFi monitoring, and expert buying guidance.",
    url: "https://bestbuyersview.com/best-camera-baby-monitors",
    siteName: "Best Buyers View",
    type: "article",
    authors: ["Best Buyers View Editorial Team"], // ⭐ AUTHOR
  },
  authors: [
    {
      name: "Best Buyers View Editorial Team",
      url: "https://bestbuyersview.com",
    },
  ],
  publisher: {
    name: "Best Buyers View",
    url: "https://bestbuyersview.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Camera Baby Monitors 2025",
    description:
      "Compare HD camera baby monitors with night vision, motion alerts, WiFi and non-WiFi safety monitoring.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ⭐ PUBLISHER SCHEMA
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

// ⭐ AUTHOR SCHEMA
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

// ⭐ ARTICLE SCHEMA (Camera Baby Monitor Specific)
function WebPageJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Camera Baby Monitors 2025",
    description:
      "Find the best camera baby monitors of 2025 with HD video, night vision, motion detection, and two-way audio.",
    articleSection: "Camera Baby Monitors",
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
    mainEntityOfPage: "https://bestbuyersview.com/best-camera-baby-monitors",
    url: "https://bestbuyersview.com/best-camera-baby-monitors",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ⭐ BREADCRUMB SCHEMA
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
        name: "Camera Baby Monitors",
        item: "https://bestbuyersview.com/best-camera-baby-monitors",
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
      <CameraBabyMonitor/>
    </>
  );
}
