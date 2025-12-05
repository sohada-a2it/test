import HipCarrier from "@/pages/productComponent/HipCarrier";
import React from "react"; 

export const metadata = {
  title: "Hip Carrier | Best Buyers View",
  description:
    "Find the best hip carriers for your baby with expert reviews, safety tips, and comfort guidance for hands-free parenting.",
  keywords: [
    "hip baby carrier",
    "best hip carrier",
    "baby carrier reviews",
    "hands-free babywearing",
    "baby comfort carrier",
    "parent guide",
  ],
  author: "Best Buyers View",
  publisher: "Best Buyers View",
  alternates: {
    canonical: "https://bestbuyersview.com/hip-carrier",
  },
  openGraph: {
    title: "Hip Carrier | Best Buyers View",
    description:
      "Explore top hip carriers for babies with detailed reviews, safety tips, and buying guidance for parents.",
    url: "https://bestbuyersview.com/hip-carrier",
    siteName: "Best Buyers View",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hip Carrier | Best Buyers View",
    description:
      "Learn about the best hip baby carriers for comfort and safety, including expert reviews and tips.",
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
    name: "Hip Carrier | Best Buyers View",
    description:
      "Find the best hip carriers for your baby with expert reviews, safety tips, and comfort guidance for hands-free parenting.",
    url: "https://bestbuyersview.com/hip-carrier",
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
        name: "Hip Carrier",
        item: "https://bestbuyersview.com/hip-carrier",
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
      <HipCarrier/>
    </>
  );
}
