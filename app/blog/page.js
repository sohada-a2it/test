// app/blog/page.jsx
import React from 'react';
import BlogHome from "@/pages/blogPage/blogHome";

// PAGE METADATA (Server Component Only)
export const metadata = {
  title: "Baby Products Blog | Best Baby Gear & Guides 2025",
  description:
    "Explore top baby products with expert guides and reviews. Categories include cribs, strollers, high chairs, baby carriers, monitors, swings, and more.",
  keywords: [
    "baby products",
    "baby gear",
    "cribs",
    "strollers",
    "high chairs",
    "baby carriers",
    "baby monitor",
    "baby swings",
    "best baby gear 2025",
    "infant products",
    "baby blog"
  ],
  alternates: {
    canonical: "https://yourwebsite.com/blog",
  },
  openGraph: {
    title: "Baby Products Blog | Best Baby Gear & Guides 2025",
    description:
      "Discover expert-reviewed baby products including cribs, strollers, high chairs, and more. Make informed choices for your newborn.",
    url: "https://yourwebsite.com/blog",
    siteName: "Baby Gear Blog",
    type: "website",
    images: [
      {
        url: "/images/blog-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Baby Products Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baby Products Blog | Best Baby Gear & Guides 2025",
    description: "Explore expert guides and reviews for cribs, strollers, high chairs, and other baby gear.",
    images: ["/images/blog-banner.jpg"],
  },
  authors: [{ name: "A2it" }],
  publisher: "A2it",
  robots: {
    index: true,
    follow: true,
  },
};
// -------------------------------------
// ORGANIZATION JSON-LD
// -------------------------------------
function OrganizationJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Baby Gear Blog",
    url: "https://yourwebsite.com",
    logo: "https://yourwebsite.com/logo.png",
    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://www.linkedin.com/company/yourcompany",
      "https://www.youtube.com/@yourchannel",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// -------------------------------------
// WEB PAGE SCHEMA
// -------------------------------------
function WebPageJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Best Baby Strollers 2025 | Baby Gear Blog",
    description:
      "A comprehensive guide to the best baby strollers with safety, comfort, and parent-friendly features.",
    url: "https://yourwebsite.com/baby-strollers",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// -------------------------------------
// BREADCRUMB SCHEMA
// -------------------------------------
function BreadcrumbJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yourwebsite.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Baby Strollers",
        item: "https://yourwebsite.com/baby-strollers",
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

export default function BlogPage() {
  return (
    <>
      {/* Structured Data */}
      <OrganizationJsonLD />
      <WebPageJsonLD />
      <BreadcrumbJsonLD />

      {/* Page Content */}
      <BlogHome />
    </>
  );
}
