import ToddlerCarrier from "@/pages/productComponent/ToddlerCarrier";
import React from "react"; 

export const metadata = {
  title: "Toddler Carrier | Best Buyers View",
  description:
    "Explore the best toddler carriers for safety, comfort, and convenience. Get expert reviews, tips, and buying guidance for parents.",
  keywords: [
    "toddler carrier",
    "best toddler carrier",
    "hands-free toddler carrier",
    "babywearing for toddlers",
    "parent guide toddler carrier",
    "child carrier reviews",
  ],
  author: "Best Buyers View",
  publisher: "Best Buyers View",
  alternates: {
    canonical: "https://bestbuyersview.com/toddler-carrier",
  },
  openGraph: {
    title: "Toddler Carrier | Best Buyers View",
    description:
      "Discover the safest and most comfortable toddler carriers, with expert reviews and buying tips for parents.",
    url: "https://bestbuyersview.com/toddler-carrier",
    siteName: "Best Buyers View",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toddler Carrier | Best Buyers View",
    description:
      "Learn about top toddler carriers for comfort and safety, including expert reviews and tips for parents.",
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
    name: "Toddler Carrier | Best Buyers View",
    description:
      "Explore the best toddler carriers for safety, comfort, and convenience. Get expert reviews, tips, and buying guidance for parents.",
    url: "https://bestbuyersview.com/toddler-carrier",
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
        name: "Toddler Carrier",
        item: "https://bestbuyersview.com/toddler-carrier",
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
       <ToddlerCarrier></ToddlerCarrier>
    </>
  );
}
