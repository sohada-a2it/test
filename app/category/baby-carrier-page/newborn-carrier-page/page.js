 
import NewbornCarrier from "@/pages/productComponent/NewbornCarrier";
import React from "react"; 

export const metadata = {
  title: "Newborn Carrier | Best Buyers View",
  description:
    "Discover the best newborn carriers for your baby with expert reviews, safety tips, and comfort guidance for parents.",
  keywords: [
    "newborn baby carrier",
    "best newborn carrier",
    "baby carrier reviews",
    "hands-free babywearing",
    "infant comfort carrier",
    "parent guide",
  ],
  author: "Best Buyers View",
  publisher: "Best Buyers View",
  alternates: {
    canonical: "https://bestbuyersview.com/newborn-carrier",
  },
  openGraph: {
    title: "Newborn Carrier | Best Buyers View",
    description:
      "Explore top newborn carriers for safety and comfort, with expert reviews and buying guidance for new parents.",
    url: "https://bestbuyersview.com/newborn-carrier",
    siteName: "Best Buyers View",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newborn Carrier | Best Buyers View",
    description:
      "Learn about the best newborn carriers for comfort and safety, including expert reviews and tips.",
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
    name: "Newborn Carrier | Best Buyers View",
    description:
      "Discover the best newborn carriers for your baby with expert reviews, safety tips, and comfort guidance for parents.",
    url: "https://bestbuyersview.com/newborn-carrier",
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
        name: "Newborn Carrier",
        item: "https://bestbuyersview.com/newborn-carrier",
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
      <NewbornCarrier/>
    </>
  );
}
