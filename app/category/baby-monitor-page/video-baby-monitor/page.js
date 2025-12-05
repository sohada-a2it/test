import VideoBabyMonitor from "@/pages/productComponent/VideoBabyMonitor";
import React from "react"; 


export const metadata = {
  title: "Best Video Baby Monitors 2025 | HD, WiFi & Non-WiFi Camera Reviews",
  description:
    "Find the best video baby monitors of 2025. Compare HD camera monitors, WiFi and non-WiFi video baby monitors, night vision, motion alerts, and secure monitoring options.",
  keywords: [
    "video baby monitor",
    "best video baby monitor",
    "wifi video baby monitor",
    "non wifi video baby monitor",
    "hd baby monitor",
    "1080p video baby monitor",
    "camera baby monitor",
    "best video baby monitors 2025",
  ],
  alternates: {
    canonical: "https://bestbuyersview.com/best-video-baby-monitors",
  },
  openGraph: {
    title:
      "Best Video Baby Monitors 2025 | HD Camera, Night Vision & Smart Tracking",
    description:
      "Explore top-rated video baby monitors with HD cameras, motion detection, night vision, and secure WiFi/non-WiFi options.",
    url: "https://bestbuyersview.com/best-video-baby-monitors",
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
    title: "Best Video Baby Monitors 2025",
    description:
      "Compare the best HD video baby monitors with WiFi, non-WiFi, night vision, and motion tracking.",
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

// ⭐ ARTICLE SCHEMA (Video Baby Monitor)
function WebPageJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Video Baby Monitors 2025",
    description:
      "Explore the best video baby monitors with HD camera quality, night vision, WiFi & non-WiFi safety, and motion alerts.",
    articleSection: "Video Baby Monitors",
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
    mainEntityOfPage: "https://bestbuyersview.com/best-video-baby-monitors",
    url: "https://bestbuyersview.com/best-video-baby-monitors",
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
        name: "Video Baby Monitors",
        item: "https://bestbuyersview.com/best-video-baby-monitors",
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
      <VideoBabyMonitor/>
    </>
  );
}
