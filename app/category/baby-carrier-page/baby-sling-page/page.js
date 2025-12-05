import BabySling from "@/pages/productComponent/BabySling";
import React from "react";
export const metadata = {
  title: "Baby Sling | Best Buyers View",
  description:
    "Discover the best baby slings with expert reviews, comfort tips, and safety guidelines to help parents carry their babies securely.",
  keywords: [
    "baby sling",
    "best baby sling",
    "baby sling reviews",
    "baby sling safety",
    "parent guide",
  ],
  author: "Best Buyers View",
  publisher: "Best Buyers View",
  alternates: {
    canonical: "https://bestbuyersview.com/baby-sling",
  },
  openGraph: {
    title: "Baby Sling | Best Buyers View",
    description:
      "Find top-rated baby slings with detailed reviews, safety advice, and comfort tips for parents.",
    url: "https://bestbuyersview.com/baby-sling",
    siteName: "Best Buyers View",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baby Sling | Best Buyers View",
    description:
      "Explore expert baby sling reviews and tips to help parents carry their babies safely and comfortably.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ORGANIZATION STRUCTURED DATA
function OrganizationJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Best Buyers View",
    url: "https://bestbuyersview.com",
    logo: "https://bestbuyersview.com/logo.png",
    sameAs: [
      "https://www.facebook.com/bestbuyersview",
      "https://www.linkedin.com/company/bestbuyersview",
      "https://www.youtube.com/@bestbuyersview",
    ],
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
    "@type": "WebPage",
    name: "Baby Sling | Best Buyers View",
    description:
      "Discover the best baby slings with expert reviews, comfort tips, and safety guidelines to help parents carry their babies securely.",
    url: "https://bestbuyersview.com/baby-sling",
    author: {
      "@type": "Person",
      name: "Best Buyers View",
    },
    publisher: {
      "@type": "Organization",
      name: "Best Buyers View",
      logo: {
        "@type": "ImageObject",
        url: "https://bestbuyersview.com/logo.png",
      },
    },
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
        name: "Baby Sling",
        item: "https://bestbuyersview.com/baby-sling",
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
      <OrganizationJsonLD />
      <WebPageJsonLD />
      <BreadcrumbJsonLD />

      {/* PAGE CONTENT */}
      <BabySling />
    </>
  );
}
