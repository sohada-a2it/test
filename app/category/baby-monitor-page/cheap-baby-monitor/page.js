import CheapBabyMonitor from "@/pages/productComponent/CheapBabyMonitor";
import React from "react"; 

export const metadata = {
  title: "Best Cheap Baby Monitors 2025 | Affordable & Budget Baby Monitor Reviews",
  description:
    "Find the best cheap baby monitors of 2025. Compare affordable video, audio, and non-WiFi baby monitors with essential safety features at budget-friendly prices.",
  keywords: [
    "cheap baby monitor",
    "affordable baby monitor",
    "budget baby monitor",
    "best cheap baby monitor 2025",
    "low cost baby monitor",
    "cheap video baby monitor",
    "cheap wifi baby monitor",
    "baby monitor under $50",
    "baby monitor under $100",
  ],
  alternates: {
    canonical: "https://bestbuyersview.com/best-cheap-baby-monitors",
  },
  openGraph: {
    title:
      "Best Cheap Baby Monitors 2025 | Affordable & Budget-Friendly Picks",
    description:
      "Explore top-rated cheap baby monitors with reliable video, audio, and long-range monitoring at the best budget prices.",
    url: "https://bestbuyersview.com/best-cheap-baby-monitors",
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
    name: "Best Buyers View",
    url: "https://bestbuyersview.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Cheap Baby Monitors 2025",
    description:
      "Discover reliable and affordable baby monitors with strong performance at low prices.",
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

// ⭐ ARTICLE SCHEMA (Cheap Baby Monitor)
function WebPageJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Cheap Baby Monitors 2025",
    description:
      "Compare the best cheap baby monitors with budget-friendly features, safety, and performance.",
    articleSection: "Cheap Baby Monitors",
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
    mainEntityOfPage: "https://bestbuyersview.com/best-cheap-baby-monitors",
    url: "https://bestbuyersview.com/best-cheap-baby-monitors",
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
        name: "Cheap Baby Monitors",
        item: "https://bestbuyersview.com/best-cheap-baby-monitors",
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
       <CheapBabyMonitor/>
    </>
  );
}
