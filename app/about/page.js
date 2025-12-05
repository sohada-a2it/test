import React from "react";
import About from "@/pages/about/about";

// ----------------------------
// PAGE METADATA
// ----------------------------
export const metadata = {
  title: "About Us | Best Baby Gear",
  description:
    "Learn more about Best Baby Gear, our mission to help parents choose the best baby products with expert reviews, comparisons, and buying guides.",
  keywords: [
    "about Best Baby Gear",
    "baby product reviews",
    "our mission",
    "parent guide",
    "about us",
    "expert baby advice",
  ],
  alternates: {
    canonical: "https://yourwebsite.com/about",
  },
  openGraph: {
    title: "About Us | Best Baby Gear",
    description:
      "Discover the mission behind Best Baby Gear and how we help parents make informed purchase decisions through expert product reviews.",
    url: "https://yourwebsite.com/about",
    siteName: "Best Baby Gear",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Best Baby Gear",
    description:
      "Learn about our mission to help parents make confident and informed baby product decisions.",
  },
  authors: [{ name: "A2it" }],  // <-- AUTHOR
  publisher: "Best Baby Gear",   // <-- PUBLISHER
  robots: {
    index: true,
    follow: true,
  },
};

// ----------------------------
// ORGANIZATION JSON-LD
// ----------------------------
function OrganizationJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Best Baby Gear",
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

// ----------------------------
// WEBPAGE JSON-LD
// ----------------------------
function WebPageJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Us | Best Baby Gear",
    description:
      "Learn more about Best Baby Gear and our mission to provide unbiased baby product reviews, guides, and recommendations.",
    url: "https://yourwebsite.com/about",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ----------------------------
// BREADCRUMB JSON-LD
// ----------------------------
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
        name: "About",
        item: "https://yourwebsite.com/about",
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

// ----------------------------
// PAGE COMPONENT
// ----------------------------
export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <OrganizationJsonLD />
      <WebPageJsonLD />
      <BreadcrumbJsonLD />

      {/* Page Content */}
      <About />
    </>
  );
}
