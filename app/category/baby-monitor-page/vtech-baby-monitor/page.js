import VtechBabyMonitor from "@/pages/productComponent/VtechBabyMonitor";
import React from "react"; 

export const metadata = {
  title: "Best VTech Baby Monitors 2025 | Top VTech Audio & Video Monitor Reviews",
  description:
    "Discover the best VTech baby monitors of 2025. Compare VTech video monitors, audio monitors, long range models, night vision, battery life, and secure connections.",
  keywords: [
    "vtech baby monitor",
    "best vtech baby monitor",
    "vtech video baby monitor",
    "vtech audio baby monitor",
    "vtech long range baby monitor",
    "vtech digital baby monitor",
    "vtech wifi baby monitor",
    "vtech non wifi baby monitor",
  ],
  alternates: {
    canonical: "https://bestbuyersview.com/best-vtech-baby-monitors",
  },
  openGraph: {
    title: "Best VTech Baby Monitors 2025 | VTech Video & Audio Monitor Reviews",
    description:
      "Explore top-rated VTech baby monitors with crystal-clear audio, HD video, long range connectivity, and reliable performance.",
    url: "https://bestbuyersview.com/best-vtech-baby-monitors",
    siteName: "Best Buyers View",
    type: "article",
    authors: ["Best Buyers View Editorial Team"],
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
    title: "Best VTech Baby Monitors 2025",
    description:
      "Find the best VTech video and audio baby monitors with secure signals, long range, and excellent night vision.",
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

// ⭐ ARTICLE SCHEMA — VTech baby monitor
function WebPageJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best VTech Baby Monitors 2025",
    description:
      "Explore the best VTech baby monitors, including video, audio-only, long-range, and secure connection models.",
    articleSection: "VTech Baby Monitors",
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
    mainEntityOfPage: "https://bestbuyersview.com/best-vtech-baby-monitors",
    url: "https://bestbuyersview.com/best-vtech-baby-monitors",
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
        name: "VTech Baby Monitors",
        item: "https://bestbuyersview.com/best-vtech-baby-monitors",
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
      <VtechBabyMonitor/>
    </>
  );
}
