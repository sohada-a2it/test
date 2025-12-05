import BabyMonitor from "@/pages/productComponent/BabyMonitor";
import React from "react"; 

export const metadata = {
  title: "Best Baby Monitors 2025 | Reviews, Safety, Comparison & Buying Guide",
  description:
    "Discover the best baby monitors of 2025. Compare top-rated video, WiFi, and non-WiFi baby monitors with safety features, long-range connectivity, night vision, and more.",
  keywords: [
    "best baby monitor",
    "baby monitor reviews",
    "video baby monitor",
    "wifi baby monitor",
    "non wifi baby monitor",
    "baby monitor buying guide",
    "top baby monitors 2025",
  ],
  alternates: {
    canonical: "https://bestbuyersview.com/best-baby-monitors",
  },
  openGraph: {
    title: "Best Baby Monitors 2025 | Reviews, Safety & Guide",
    description:
      "Compare the top baby monitors of 2025 with expert reviews and safety insights. Find the perfect monitor for newborns and toddlers.",
    url: "https://bestbuyersview.com/best-baby-monitors",
    siteName: "Best Buyers View",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Baby Monitors 2025",
    description:
      "Expert reviews of the best baby monitors with safety, range, and features comparison.",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: "Best Buyers View Editorial Team", // ⭐ AUTHOR ADDED
      url: "https://bestbuyersview.com",
    },
  ],
  publisher: {
    name: "Best Buyers View", // ⭐ PUBLISHER ADDED
    url: "https://bestbuyersview.com",
  },
};

// ORGANIZATION SCHEMA (Publisher)
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

// AUTHOR SCHEMA
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

// WEBPAGE SCHEMA
function WebPageJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Baby Monitors 2025",
    description:
      "Explore the best baby monitors of 2025 with full reviews, safety analysis, and buying guides.",
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
    url: "https://bestbuyersview.com/best-baby-monitors",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BREADCRUMB SCHEMA
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
        name: "Baby Monitors",
        item: "https://bestbuyersview.com/best-baby-monitors",
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
      {/* JSON-LD SCHEMAS */}
      <PublisherJsonLD />
      <AuthorJsonLD />
      <WebPageJsonLD />
      <BreadcrumbJsonLD />

      {/* PAGE CONTENT */}
       <BabyMonitor/>
    </>
  );
}
