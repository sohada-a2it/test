import React from "react";
import BabyCarrier from "@/pages/blogPage/babycarrierPage";

// PAGE METADATA
export const metadata = {
  title: "Best Baby Carrier Products | Baby Gear Blog",
  description:
    "Discover the best baby carriers for comfort and safety. Read our expert reviews and guides on choosing the perfect baby gear.",
  keywords: [
    "baby carrier",
    "baby gear",
    "baby products",
    "parenting",
    "best baby carrier",
    "baby carrier reviews",
  ],
  alternates: {
    canonical: "https://yourwebsite.com/baby-carrier",
  },
  openGraph: {
    title: "Best Baby Carrier Products | Baby Gear Blog",
    description:
      "Discover the best baby carriers for comfort and safety. Read our expert reviews and guides on choosing the perfect baby gear.",
    url: "https://a2itltd.com/",
    siteName: "Baby Gear Blog",
    type: "website",
    images: [
      {
        url: "/images/a2itBanner.png",
        width: 800,
        height: 600,
        alt: "Best Baby Carrier Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Baby Carrier Products | Baby Gear Blog",
    description:
      "Discover the best baby carriers for comfort and safety. Read our expert reviews and guides on choosing the perfect baby gear.",
    images: ["/images/a2itBanner.png"],
  },
  authors: [{ name: "A2it" }],
  publisher: "A2it",
  robots: {
    index: true,
    follow: true,
  },
};

// ORGANIZATION JSON-LD
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

// WEBPAGE JSON-LD
function WebPageJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Best Baby Carrier Products | Baby Gear Blog",
    description:
      "Discover the best baby carriers for comfort and safety. Read our expert reviews and guides on choosing the perfect baby gear.",
    url: "https://yourwebsite.com/baby-carrier",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BREADCRUMB JSON-LD
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
        name: "Baby Carrier",
        item: "https://yourwebsite.com/baby-carrier",
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

// PAGE COMPONENT
export default function Page() {
  return (
    <>
      {/* JSON-LD SCHEMAS */}
      <OrganizationJsonLD />
      <WebPageJsonLD />
      <BreadcrumbJsonLD />

      {/* PAGE CONTENT */}
      <BabyCarrier />
    </>
  );
}
